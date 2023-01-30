import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintcalculatorComponent } from './sprintcalculator.component';

describe('SprintcalculatorComponent', () => {
  let component: SprintcalculatorComponent;
  let fixture: ComponentFixture<SprintcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintcalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
