import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import User from '../../models/User';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  selectedUser?: any;

  constructor(private route: ActivatedRoute, public userService: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        console.log(data);
        this.selectedUser = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
