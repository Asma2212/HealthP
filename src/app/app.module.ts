import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { LogoutComponent } from './logout/logout.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { ProfilGuard } from './profil.guard';
import { QuizComponent } from './quiz/quiz.component';
import { AdminComponent } from './admin/admin.component';
import { ExerciceComponent } from './exercice/exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfilComponent,
    LogoutComponent,
    FooterComponent,
    QuizComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
  ],
  providers: [LoginService,ProfilGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
