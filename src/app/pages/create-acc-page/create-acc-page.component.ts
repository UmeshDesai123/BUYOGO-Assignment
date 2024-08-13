import { Component, OnInit } from '@angular/core';
import { CreateAccService } from '../../services/create-acc.service';

@Component({
  selector: 'app-create-acc-page',
  templateUrl: './create-acc-page.component.html',
  styleUrl: './create-acc-page.component.css'
})
export class CreateAccPageComponent {
  showPage2: boolean = false;
  constructor(
    private createAccService: CreateAccService
  ){}

  ngOnInit(): void {
    this.createAccService.showPage2$.subscribe((value: boolean) => {
      this.showPage2 = value;
    });
  }
}