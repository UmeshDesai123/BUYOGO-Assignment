import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccService } from '../../services/create-acc.service';

@Component({
  selector: 'app-create-account2',
  templateUrl: './create-account2.component.html',
  styleUrl: './create-account2.component.css'
})
export class CreateAccount2Component {
  errorMessage: string;
  orgName: string;
  orgId: string;
  designation: string;
  dob: Date;
  city: string;
  pincode: number;
  constructor(
    private router: Router,
    private createAccService: CreateAccService,
  ){}

  ngOnInit(): void {
    // Initialize form fields with data from the service
    this.orgName = this.createAccService.getOrgName();
    this.orgId = this.createAccService.getOrgId();
    this.designation = this.createAccService.getDesignation();
    this.dob = this.createAccService.getDob();
    this.city = this.createAccService.getCity();
    this.pincode = this.createAccService.getPincode();
  }

  handleOrgName(e: any): void {
    this.orgName = e.target.value;
    this.errorMessage = '';
    this.createAccService.setOrgName(this.orgName); // Store the value in the service
  }

  handleOrgId(e: any): void {
    this.orgId = e.target.value;
    this.errorMessage = '';
    this.createAccService.setOrgId(this.orgId); // Store the value in the service
  }

  handleDesignation(e: any): void {
    this.designation = e.target.value;
    this.errorMessage = '';
    this.createAccService.setDesignation(this.designation); // Store the value in the service
  }

  handleDob(e: any): void {
    this.dob = e.target.value;
    this.errorMessage = '';
    this.createAccService.setDob(this.dob); // Store the value in the service
  }

  handleCity(e: any): void {
    this.city = e.target.value;
    this.errorMessage = '';
    this.createAccService.setCity(this.city); // Store the value in the service
  }

  handlePincode(e: any): void {
    this.pincode = e.target.value;
    this.errorMessage = '';
    this.createAccService.setPincode(this.pincode); // Store the value in the service
  }

  onNext(){
    if(!this.orgName || !this.orgId || !this.designation || !this.dob || !this.city || !this.pincode){
      this.errorMessage = 'Enter all fields';
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  goBack(e){
    this.createAccService.setShowPage(false);
  }
}
