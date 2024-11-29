import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface UserModel {
  name: string;
  password: string;
}
@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
})
export class UserlistComponent {
  @Input() users: UserModel[] = []; 
  @Input() deleteUser: (index: number) => void = () => {};
}
