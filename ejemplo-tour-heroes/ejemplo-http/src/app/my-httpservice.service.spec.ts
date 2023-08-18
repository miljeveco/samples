import { TestBed } from '@angular/core/testing';

import { MyHTTPServiceService } from './my-httpservice.service';

describe('MyHTTPServiceService', () => {
  let service: MyHTTPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHTTPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
