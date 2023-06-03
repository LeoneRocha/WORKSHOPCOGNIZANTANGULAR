import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post: any;
  @Output() postDeleted = new EventEmitter();

  constructor(private postService: PostService) { }

  deletePost(id: number): void {
    //alert('deletar');
    let objToPai = { "id": id };

    this.postDeleted.emit(objToPai);
    console.log('Resposta para o component pai');
  }
}
