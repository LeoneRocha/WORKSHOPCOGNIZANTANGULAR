import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post: any;
  @Output() postDeleted = new EventEmitter();

  constructor(private postService: PostService, @Inject(Router) private router: Router) { }

  editPost(idPost: number): void {
    this.router.navigate(['/post-edit', { id: idPost }]);
  }

  deletePost(idPost: number): void {
    //alert('deletar');
    let objToPai = { "id": idPost };

    this.postDeleted.emit(objToPai);
    console.log('Resposta para o component pai');
  }
}
