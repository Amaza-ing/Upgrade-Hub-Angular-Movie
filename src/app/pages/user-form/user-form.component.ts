import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userForm: FormGroup;
  id: FormControl;
  name: FormControl;
  email: FormControl;

  constructor(public userService: UserService) {
    this.id = new FormControl('');
    this.name = new FormControl('');
    this.email = new FormControl('');

    this.userForm = new FormGroup({
      id: this.id,
      name: this.name,
      email: this.email,    
    })
  }

  postUser() {
    console.log(this.userForm.value);
    
    this.userService.postUser(this.userForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
