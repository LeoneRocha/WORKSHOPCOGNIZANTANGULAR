import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html'
  //styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  handlePostDeleted(valueObj: any): void {
    console.log('Foi emitido o evento e chegou no pai >>>> ', valueObj["id"]);
    this.posts = this.posts.filter(post => post.id !== valueObj["id"]);

    this.postService.deletePost(valueObj["id"])
      .subscribe(() => {
        this.router.navigate(['/post-list']);
      });

    alert('Post apagado! Já era.');


  }
  /*
    handlePostUpdated(updatedPost: any): void {
      console.log('Foi emitido o evento e chegou no pai >>>> ', updatedPost["id"]);    
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      } 
      alert('Post atualizado! Já era.');
    }
  */

}
