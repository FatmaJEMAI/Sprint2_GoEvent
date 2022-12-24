import { TestBed } from '@angular/core/testing';

import { addquestionService } from './addquestion.service';

describe('AddquestionService', () => {
  let service: addquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(addquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
