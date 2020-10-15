import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRComponent } from './medical-r.component';

describe('MedicalRComponent', () => {
  let component: MedicalRComponent;
  let fixture: ComponentFixture<MedicalRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
