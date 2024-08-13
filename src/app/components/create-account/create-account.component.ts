import { Component } from '@angular/core';
import { CreateAccService } from '../../services/create-acc.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  errorMessage: string;
  email: string;
  name: string;
  password: string;
  constructor(
    private createAccService: CreateAccService,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    // Initialize form fields with data from the service
    this.email = this.createAccService.getEmail();
    this.name = this.createAccService.getName();
    this.password = this.createAccService.getPassword();
  }

  handleEmail(e: any): void {
    this.email = e.target.value;
    this.errorMessage = '';
    this.createAccService.setEmail(this.email);
  }

  handleName(e: any): void {
    this.name = e.target.value;
    this.errorMessage = '';
    this.createAccService.setName(this.name);
    this.userService.setName(this.name);
  }

  handlePassword(e: any): void {
    this.password = e.target.value;
    this.errorMessage = '';
    this.createAccService.setPassword(this.password);
  }

  onNext(){
    if(!this.email || !this.name || !this.password){
      this.errorMessage = 'Enter all fields';
    }
    else{
      console.log('cllicked')
      this.createAccService.setShowPage(true);
    }
  }
}
