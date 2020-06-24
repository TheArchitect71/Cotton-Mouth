import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent} from './navigation/navigation.component';
import { AboutComponent } from './app-shell//about/about.component';
import { ExperienceComponent } from './app-shell//experience/experience.component';
import { FavoritesComponent } from './app-shell//favorites/favorites.component';
import { ProjectsComponent } from './app-shell//projects/projects.component';
import { TechnologyComponent } from './app-shell//technology/technology.component';
import { ContactComponent } from './app-shell//contact/contact.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '', component: NavigationComponent},
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
