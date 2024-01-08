import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public userNameFormControl = new FormControl(null, [
  Validators.required, 
  Validators.email
]);
public passwordFormControl = new FormControl(null, [Validators.minLength(4)]);


public userForm!: FormGroup;
constructor() {}


ngOnInit(): void {
  this.userForm = new FormGroup ( {
username: this.userNameFormControl,
password: this.passwordFormControl,




  }
  ); 
}


submit() {
  console.log(this.userForm.value);

}



}
