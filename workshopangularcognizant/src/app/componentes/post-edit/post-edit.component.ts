import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { PostModel } from '../../model/postModel';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  post: any
  postId: number = 0;
  @Output() postUpdate = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost();
  }

  getPost(): void {
    this.postService.getPost(this.postId)
      .subscribe(post => {
        this.post = post;
        console.log(post);
      });
  }

  savePost(): void {
    this.postUpdate.emit(this.post);
    this.postService.updatePost(this.postId, this.post)
      .subscribe(() => {
        this.router.navigate(['/post-list']);
      });
  }
}
