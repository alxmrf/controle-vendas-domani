import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultores } from './consultores';

describe('Consultores', () => {
  let component: Consultores;
  let fixture: ComponentFixture<Consultores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consultores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consultores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
