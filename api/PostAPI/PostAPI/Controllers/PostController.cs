using Microsoft.AspNetCore.Mvc;
using PostAPI.Models;
using PostAPI.Repositories;

namespace PostAPI.Controllers
{
    [ApiController]
    [Route("api/posts")]
    public class PostController : ControllerBase
    {
        private readonly IGenericRepository<Post> _postRepository; 
        private readonly PostService _postService;
        public PostController(IGenericRepository<Post> postRepository, PostService postService)
        {
            _postRepository = postRepository;
            _postService = postService;
        }

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return _postRepository.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Post> GetById(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return post;
        }

        [HttpPost]
        public ActionResult<Post> Create(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction(nameof(GetById), new { id = post.Id }, post);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }
            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            _postRepository.Remove(post);
            return NoContent();
        }

        [HttpPost("fetch")]
        public async Task<IActionResult> FetchAndSavePosts()
        {
            var result = await _postService.FetchAndSavePosts();
            if (result)
            {
                return Ok("Posts fetched and saved successfully.");
            }

            return BadRequest("Failed to fetch and save posts.");
        }
    }
}
