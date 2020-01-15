import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { CultureComponent } from './culture/culture.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PhotographyComponent } from './photography/photography.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent},
  { path: 'culture', component: CultureComponent},
  { path: 'favorite', component: FavoritesComponent},
  { path: 'photography', component: PhotographyComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'technology', component: TechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
