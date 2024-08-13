import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  email!: string;
  mob!: number
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.email = this.userService.getEmail();
  }

  handleEmail(e: any) {
    this.email = e.target.value;
    this.errorMessage = '';
    this.userService.setEmail(this.email);
  }
  handleMob(e: any) {
    this.mob = e.target.value;
    this.errorMessage = '';
    console.log(this.mob);
  }

  handleNext() {
    console.log('clicked');

    if (!this.email && !this.mob) {
      this.errorMessage = 'Enter email or mobile number';
    } else {
      this.isLoading = true;
      this.userService.checkUserExists().pipe(
        timeout(5000), // Set the timeout to 5000 milliseconds (5 seconds)
        catchError((error) => {
          // Handle timeout error specifically
          if (error.name === 'TimeoutError') {
            this.errorMessage = 'Connect or API failure. Please try again.';
          }
          this.isLoading = false;
          return throwError(() => new Error('Timeout or other error occurred'));
        })
      ).subscribe({
        next: (response) => {
          console.log(response);
          const user = response.find((u: any) => u.email === this.email);

          if (user) {
            this.userService.setName(user.name);
            this.router.navigate(['/login']);
          } else {
            this.errorMessage = 'User does not exist.';
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.log('>>>>', error);
          this.isLoading = false;
        }
      });
    }
  }

  createAcc(e) {
    this.router.navigate(['/create-account']);
  }
}
