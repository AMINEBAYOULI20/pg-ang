import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.models';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm:FormGroup;
  constructor(private formbuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.initform();
  }
  initform(){
    this.userForm = this.formbuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    drinkPreference:['',Validators.required],
    hobbies: this.formbuilder.array([]),
    });
  }

    onSubmitForm() {
      const formValue = this.userForm.value;
      const newUser = new User(
        formValue['firstName'],
        formValue['lastName'],
        formValue['email'],
        formValue['drinkPreference'],
        formValue['hobbies'] ? formValue['hobbies'] : []
      );
      this.userService.addUser(newUser);
      this.router.navigate(['/users']);
  }
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
    const newHobbyControl = this.formbuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
