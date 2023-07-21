import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { PostService } from 'src/app/services/post.service';

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
    this.post = { "id": 0, "userId": 0, "title": "", "body": "" };
  }

  ngOnInit(): void {
  } 
  savePost(): void {
    console.log(this.post);
    //this.postUpdate.emit(this.post);
    this.postService.addPost(this.post)
      .subscribe(() => {
        this.router.navigate(['/post-list']);
      });
  }
}
