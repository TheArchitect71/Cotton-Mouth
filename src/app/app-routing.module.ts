import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'log-in', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
