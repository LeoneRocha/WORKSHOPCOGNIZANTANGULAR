import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AppComponent } from './app.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostNewComponent } from './post-new/post-new.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-edit', component: PostEditComponent },
  { path: 'post-new', component: PostNewComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
