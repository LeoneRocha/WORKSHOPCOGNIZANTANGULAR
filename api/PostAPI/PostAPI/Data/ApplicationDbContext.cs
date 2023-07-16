using Microsoft.EntityFrameworkCore;
using PostAPI.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace PostAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>().ToTable("Posts");


            base.OnModelCreating(modelBuilder);
        }
    }
}
