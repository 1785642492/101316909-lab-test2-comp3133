import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpacexapiService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: SpacexapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpacexapiService]
    });
    service = TestBed.inject(SpacexapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can retrieve launches from the API via GET', () => {
    service.getLaunches().subscribe(data => {
      expect(data).toBeTruthy();
      
    });

    const req = httpTestingController.expectOne('https://api.spacexdata.com/v3/launches');
    expect(req.request.method).toBe('GET');
    req.flush({}); 
  });



  afterEach(() => {
    httpTestingController.verify();
  });
});
