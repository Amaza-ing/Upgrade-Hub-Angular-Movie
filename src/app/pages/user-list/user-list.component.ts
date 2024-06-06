import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsersFromComponent();
  }

  getUsersFromComponent() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.userService.users = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getUsersFromComponent();    
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
}
