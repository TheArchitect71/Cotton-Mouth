import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordmanagementComponent } from './passwordmanagement.component';

describe('PasswordmanagementComponent', () => {
  let component: PasswordmanagementComponent;
  let fixture: ComponentFixture<PasswordmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
