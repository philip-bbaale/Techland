import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers : [UserService]

})


export class  RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl:string;
  error = '';


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService 
    ) {}

  ngOnInit(): void{
    this.registerForm = this.formBuilder.group( {
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      password2:['',Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  get f() {
    return this.registerForm.controls;
  }


  onSubmit(){
    this.submitted = true;

    if (this.registerForm.invalid){
      return;
    }

    this.loading = true;

    console.log('submitted value', this.registerForm.value);

    const username = this.registerForm.value.username;
    const email= this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const password2 = this.registerForm.value.password2;

    this.userService.authenticate(username,email, password, password2).subscribe(
      response => {
        alert('User ' + username + ' has been created!');
        this.router.navigate(['/login']);
      },

      error => {
        console.log('error');
        this.loading = false;
        this.error=error

      }
    );

  }
}


