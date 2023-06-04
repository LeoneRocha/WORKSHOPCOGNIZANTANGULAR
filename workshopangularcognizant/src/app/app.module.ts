import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './post-item/post-item.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormsModule } from '@angular/forms';
import { PostNewComponent } from './post-new/post-new.component';

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
