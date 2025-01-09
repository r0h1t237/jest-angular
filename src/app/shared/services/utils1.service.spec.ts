import { TestBed } from '@angular/core/testing';

import { Utils1Service } from './utils1.service';

describe('Utils1Service', () => {
  let service: Utils1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Utils1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
