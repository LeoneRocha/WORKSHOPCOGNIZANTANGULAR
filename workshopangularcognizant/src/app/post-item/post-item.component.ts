import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post: any;

  constructor(private postService: PostService) { }

  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe(() => {
      // Emitir um evento para notificar o componente pai sobre a exclusão do post
    });
  }
}
