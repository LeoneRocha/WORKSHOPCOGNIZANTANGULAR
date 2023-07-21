import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';  
import { HttpClientModule } from '@angular/common/http'; 
import { PostEditComponent } from './componentes/post-edit/post-edit.component';
import { FormsModule } from '@angular/forms'; 
import { MeucomponenteonewayComponent } from './componentes/meucomponenteoneway/meucomponenteoneway.component';
import { PostModule } from './modulos/postmodule.module';
import { MeucomponentetwoawayComponent } from './componentes/meucomponentetwoaway/meucomponentetwoaway.component';
import { MeucomponentedecoratorComponent } from './componentes/meucomponentedecorator/meucomponentedecorator.component';

@NgModule({
  declarations: [
    AppComponent, 
     MeucomponenteonewayComponent, MeucomponentetwoawayComponent, MeucomponentedecoratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
