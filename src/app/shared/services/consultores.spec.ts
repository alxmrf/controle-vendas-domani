import { TestBed } from '@angular/core/testing';


describe('Consultores', () => {
  let service: Consultores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consultores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
