import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service'; 

@Component({
  selector: 'post-edit',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {
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
  } 


  savePost(): void {
    this.postUpdate.emit(this.post);
    this.postService.updatePost(this.postId, this.post)
      .subscribe(() => {
        this.router.navigate(['/post-list']);
      });
  }
}
