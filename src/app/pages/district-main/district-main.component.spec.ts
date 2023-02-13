import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMainComponent } from './district-main.component';

describe('DistrictMainComponent', () => {
  let component: DistrictMainComponent;
  let fixture: ComponentFixture<DistrictMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
