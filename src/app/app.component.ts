import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { SignupComponent } from './signup/signup.component';

interface UserModel {
  name: string;
  password: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, UserlistComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: UserModel[] = [];

  addUser(newUser: UserModel) {
 
    this.users = [...this.users, newUser]; 
  }

  deleteUser(index: number) {
  
    this.users = this.users.filter((_, i) => i !== index); 
  }
}
