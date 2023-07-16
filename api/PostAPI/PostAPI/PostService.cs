using Microsoft.EntityFrameworkCore;
using PostAPI.Data;
using PostAPI.Models;
using System.Text.Json;

namespace PostAPI
{
    public class PostService
    {
        private readonly ApplicationDbContext _context;
        private readonly HttpClient _httpClient;
        private readonly JsonSerializerOptions _jsonSerializerOptions;

        public PostService(ApplicationDbContext context)
        {
            _context = context;
            _httpClient = new HttpClient();
            _jsonSerializerOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };
        }

        private void removeAllPosts()
        {
            var posts = _context.Posts;
            _context.Posts.RemoveRange(posts);
            _context.SaveChanges();
        }

        public async Task<bool> FetchAndSavePosts()
        {
            removeAllPosts();
            var response = await _httpClient.GetAsync("https://jsonplaceholder.typicode.com/posts");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var posts = JsonSerializer.Deserialize<List<Post>>(content, _jsonSerializerOptions);
                _context.Posts.AddRange(posts);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
