import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { QuestionsModule } from "./questions/questions.module"
import { AngularMaterialModule } from "./angular-material.module";

import { ExperienceComponent } from "./app-shell/experience/experience.component";
import { TechnologyComponent } from "./app-shell/technology/technology.component";
import { AboutComponent } from "./app-shell/about/about.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
import { FavoritesComponent } from "./app-shell/favorites/favorites.component";
import { ContactComponent } from './app-shell/contact/contact.component';
import { AuthInterceptor } from "./authentication/auth-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    TechnologyComponent,
    AboutComponent,
    NavigationComponent,
    FooterComponent,
    FavoritesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    QuestionsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
