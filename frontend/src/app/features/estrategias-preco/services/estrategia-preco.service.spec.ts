import { TestBed } from '@angular/core/testing';

import { EstrategiaPrecoService } from './estrategia-preco.service';

describe('EstrategiaPrecoService', () => {
  let service: EstrategiaPrecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstrategiaPrecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
