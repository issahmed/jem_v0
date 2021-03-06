import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ResetComponent } from './auth/reset/reset.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailConfirmationComponent } from './auth/email-confirmation/email-confirmation.component';
import { HeaderComponent } from './shared-layout/header/header.component';
import { SidebarComponent } from './shared-layout/sidebar/sidebar.component';
import { MainLayoutComponent } from './shared-layout/main-layout/main-layout.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer, matDrawerAnimations, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { AdminComponent } from './dashboard/admin/admin.component';
import { MembreComponent } from './dashboard/membre/membre.component';
import { UsersListComponent } from './dashboard/admin/users-list/users-list.component';
import { HomeComponent } from './dashboard/admin/home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
    EmailConfirmationComponent,
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent,
    AdminComponent,
    MembreComponent,
    UsersListComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    

    
    
    
    


    
  
  ],
  providers: [  
     // AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
