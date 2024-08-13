import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string | number = '';
  email!: string;
  password!: string;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
  ){}
  showError: boolean = false;

  ngOnInit(): void {
    this.userName = this.userService.getName(); // Retrieve the name from the service
    this.email = this.userService.getEmail();
  }

  handleEmail(e: any){
    this.email = e.target.value;
    this.errorMessage = '';
    this.userService.setEmail(this.email);
  }
  handlePassword(e: any){
    this.password = e.target.value;
    this.errorMessage = '';
    // console.log(this.password);
  }

  onNext(){
    console.log('clicked login');
    if(!this.email || !this.password){
      this.errorMessage = 'Enter email and password';
      return;
    }
    this.isLoading = true;
    this.userService.login({email:this.email, password:this.password}).subscribe({
      next: (response) => {
        if(response){
          console.log(response)
          localStorage.setItem('accessToken', response.access_token);
          console.log('login success');
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        if(error.status === 401){
          this.errorMessage = "Incorrect Password"
        }
        console.log('...>>>', error);
        this.isLoading = false;
      }
    });
  }
}
