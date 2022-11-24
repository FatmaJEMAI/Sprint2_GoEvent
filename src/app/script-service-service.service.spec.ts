import { TestBed } from '@angular/core/testing';

import { ScriptServiceServiceService } from './script-service-service.service';

describe('ScriptServiceServiceService', () => {
  let service: ScriptServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
