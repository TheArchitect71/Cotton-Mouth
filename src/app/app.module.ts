import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./angular-material.module";

import { ExperienceComponent } from "./experience/experience.component";
import { TechnologyComponent } from "./technology/technology.component";
import { AboutComponent } from "./about/about.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    TechnologyComponent,
    AboutComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    FavoritesComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
