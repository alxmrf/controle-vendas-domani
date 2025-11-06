import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorBox } from './consultor-box';

describe('ConsultorBox', () => {
  let component: ConsultorBox;
  let fixture: ComponentFixture<ConsultorBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultorBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
