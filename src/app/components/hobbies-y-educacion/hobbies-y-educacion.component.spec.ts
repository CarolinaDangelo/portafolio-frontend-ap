import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesYEducacionComponent } from './hobbies-y-educacion.component';

describe('HobbiesYEducacionComponent', () => {
  let component: HobbiesYEducacionComponent;
  let fixture: ComponentFixture<HobbiesYEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesYEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesYEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
