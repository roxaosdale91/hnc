import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubprofileComponent } from './clubprofile.component';

describe('ClubprofileComponent', () => {
  let component: ClubprofileComponent;
  let fixture: ComponentFixture<ClubprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
