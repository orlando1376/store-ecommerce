import { TestBed } from '@angular/core/testing';

import { MyPreloadService } from './my-preload.service';

describe('MyPreloadService', () => {
  let service: MyPreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
