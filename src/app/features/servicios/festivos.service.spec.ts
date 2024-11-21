import { TestBed } from '@angular/core/testing';

import { FestivosService } from './festivos.service';

describe('FestivoService', () => {
  let service: FestivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
