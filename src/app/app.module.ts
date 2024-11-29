import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AppComponent,
    UserlistComponent,
  ],
  providers: [],
  bootstrap: [AppComponent, UserlistComponent, SignupComponent],
})
export class AppModule {}
