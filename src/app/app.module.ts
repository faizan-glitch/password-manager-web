import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeBackgroundComponent } from './components/home-background/home-background.component';
import { AuthRoutesComponent } from './components/auth-routes/auth-routes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { SideNavRoutingModule } from './components/dashboard/sidenav/sidenav-routing.module';
import { AuthGuard } from './services/auth.guard';
import { ResetComponent } from './components/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HomeBackgroundComponent,
    AuthRoutesComponent,
    DashboardComponent, 
    ToolbarComponent,
    SidenavComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SideNavRoutingModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
