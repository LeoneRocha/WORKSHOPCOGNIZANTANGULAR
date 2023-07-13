import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../componentes/post-list/post-list.component';
import { PostItemComponent } from '../componentes/post-item/post-item.component';
import { PostEditComponent } from '../componentes/post-edit/post-edit.component';
import { PostNewComponent } from '../componentes/post-new/post-new.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostListComponent, PostItemComponent, PostEditComponent, PostNewComponent,
  ],
  imports: [
    CommonModule, FormsModule,
  ],
  exports: [
    PostListComponent, PostItemComponent, PostEditComponent, PostNewComponent,
  ],
  providers: []
})
export class PostmoduleModule { }
