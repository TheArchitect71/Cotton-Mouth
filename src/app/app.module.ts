import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnologyComponent } from './technology/technology.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotographyComponent } from './photography/photography.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CultureComponent } from './culture/culture.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    TechnologyComponent,
    AboutComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    PhotographyComponent,
    FavoritesComponent,
    CultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
