import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccService {
  private email: string = '';
  private name: string = '';
  private password: string = '';
  private orgName: string = '';
  private orgId: string = '';
  private designation: string = '';
  private dob: Date;
  private city: string = '';
  private pincode: number;

  private showPage2Subject = new BehaviorSubject<boolean>(false); // Initialize with false
  showPage2$ = this.showPage2Subject.asObservable(); // Expose as observable

  setShowPage(value: boolean): void {
    this.showPage2Subject.next(value); // Emit new value
  }

  setEmail(value: string): void {
    this.email = value;
  }

  getEmail(): string {
    return this.email;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }

  setPassword(value: string): void {
    this.password = value;
  }

  getPassword(): string {
    return this.password;
  }

  setOrgName(value: string): void {
    this.orgName = value;
  }

  getOrgName(): string {
    return this.orgName;
  }

  setOrgId(value: string): void {
    this.orgId = value;
  }

  getOrgId(): string {
    return this.orgId;
  }

  setDesignation(value: string): void {
    this.designation = value;
  }

  getDesignation(): string {
    return this.designation;
  }

  setDob(value: Date): void {
    this.dob = value;
  }

  getDob(): Date {
    return this.dob;
  }

  setCity(value: string): void {
    this.city = value;
  }

  getCity(): string {
    return this.city;
  }

  setPincode(value: number): void {
    this.pincode = value;
  }

  getPincode(): number {
    return this.pincode;
  }
}
