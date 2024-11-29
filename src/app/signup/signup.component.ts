import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface UserModel {
  name: string;
  password: string;
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @Input() users: UserModel[] = [];
  @Output() newUser = new EventEmitter<UserModel>();
  showpassword: boolean = false;
  name: string = '';
  password: string = '';

  addUser() {
    if (this.name.trim() && this.password.trim()) {
      const userExists = this.users.some(
        (user) => user.name === this.name.trim()
      );

      if (userExists) {
        alert('User already exists.');
      } else {
        const user: UserModel = {
          name: this.name.trim(),
          password: this.password.trim(),
        };

        this.newUser.emit(user);
        this.name = '';
        this.password = '';
      }
    } else {
      alert('Please fill in both Name and Password fields.');
    }
  }
}
