import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  username: string;
  firstName: string;
  lastName: string;

  profileFormGroup: FormGroup;

  constructor(private userService: UserService) {
    this.username = "@fredodatina";

    this.firstName = "Fredo";
    this.lastName = "Da Tina";

    this.profileFormGroup = new FormGroup({
      firstNameControl: new FormControl<string>(this.firstName, Validators.required),
      lastNameControl: new FormControl<string>(this.lastName, Validators.required)
    });
  }

  onSubmit(): void {
    console.warn(this.profileFormGroup.value);
  }
}
