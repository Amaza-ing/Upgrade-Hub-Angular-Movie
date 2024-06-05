import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor(public userService: UserService) {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);        
      }
    })
  }
}
