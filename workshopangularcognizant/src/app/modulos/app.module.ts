import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../routes/app-routing.module';
import { AppComponent } from '../app.component';  
import { HttpClientModule } from '@angular/common/http'; 
import { PostEditComponent } from '../componentes/post-edit/post-edit.component';
import { FormsModule } from '@angular/forms'; 
import { PostListComponent } from '../componentes/post-list/post-list.component';
import { PostNewComponent } from '../componentes/post-new/post-new.component';
import { PostItemComponent } from '../componentes/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent, 
    PostListComponent, PostItemComponent, PostEditComponent, PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
