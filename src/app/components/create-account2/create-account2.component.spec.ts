import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccount2Component } from './create-account2.component';

describe('CreateAccount2Component', () => {
  let component: CreateAccount2Component;
  let fixture: ComponentFixture<CreateAccount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAccount2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
