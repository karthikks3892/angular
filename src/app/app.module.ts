import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ListcoursesService } from './listcourses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataRendererComponent } from './data-renderer/data-renderer.component';
import { ValuesService } from './values.service';
import { appRouting } from './app.router';
import { HomeComponent } from './home/home.component';
import { DetailResolver } from './details.resolver';
import { NglistComponent } from './nglist/nglist.component';
import { RformsComponent } from './rforms/rforms.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    DataRendererComponent,
    HomeComponent,
    NglistComponent,
    RformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    ReactiveFormsModule
    

  ],
  providers: [ListcoursesService,ValuesService,DetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
