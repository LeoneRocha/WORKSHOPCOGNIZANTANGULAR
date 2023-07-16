using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using PostAPI.Data;
using PostAPI.Repositories;
using Swashbuckle.AspNetCore.Filters;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace PostAPI
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var connection = string.Empty;
            connection = Configuration.GetConnectionString("PostAPIConnectionMySQL");

            services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseMySql(connection, ServerVersion.AutoDetect(connection)
                    , b =>
                    {
                        b.MigrationsAssembly("PostAPI");
                        b.SchemaBehavior(MySqlSchemaBehavior.Ignore);
                    }));

            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<PostService>();
            services.AddControllers();
            //CORS
            addCors(services);

            //Documenacao
            addDoc(services);
        }

        #region Cors
        private void addCors(IServiceCollection services)
        {
            services.AddCors(options => options.AddDefaultPolicy(builder =>
            {
                builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .WithExposedHeaders("Content-Disposition");
            }));
        }
        #endregion


        #region DOCUMENTACAO
        private void addDoc(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "POST.API", Version = "v1" });
                c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Description = "Standard Authorization header using the Bearer scheme. Example: \"bearer {token}\"",
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });
                c.OperationFilter<SecurityRequirementsOperationFilter>();
            });
        }
        #endregion


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //// Migrate latest database changes during startup
            addAutoMigrate(app);

            app.UseRouting();
            app.UseCors();

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "POST.API v1"));

            var option = new RewriteOptions();
            option.AddRedirect("^$", "swagger");

            app.UseRewriter(option);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void addAutoMigrate(IApplicationBuilder app)
        {
            //// Migrate latest database changes during startup
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>())
                {
                    context.Database.EnsureCreated();
                    //context.Database.Migrate();
                }
            }
        }
    }
}
