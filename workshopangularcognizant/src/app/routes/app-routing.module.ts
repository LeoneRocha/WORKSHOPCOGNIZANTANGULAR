import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PostEditComponent } from '../componentes/post-edit/post-edit.component'; 
import { PostListComponent } from '../componentes/post-list/post-list.component';
import { PostNewComponent } from '../componentes/post-new/post-new.component';
import { MeucomponenteonewayComponent } from '../componentes/meucomponenteoneway/meucomponenteoneway.component';
import { MeucomponentetwoawayComponent } from '../componentes/meucomponentetwoaway/meucomponentetwoaway.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-edit', component: PostEditComponent },
  { path: 'post-new', component: PostNewComponent },
  { path: 'oneway', component: MeucomponenteonewayComponent },
  { path: 'twoway', component: MeucomponentetwoawayComponent  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
