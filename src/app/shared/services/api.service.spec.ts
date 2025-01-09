import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { TagInterface } from '../types/tag.interface';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, provideHttpClient(), provideHttpClientTesting()],
    });
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('creates service', () => {
    expect(apiService).toBeTruthy();
  });

  describe('getTags', () => {
    it('should return a list of tags', () => {
      let tags: TagInterface[] | undefined;
      apiService.getTags().subscribe(response => {
        tags = response;
      });
      const req = httpTestingController.expectOne(
        'http://localhost:3004/tags'
      )
      req.flush([{ id: '2', name: 'foo' }])
      expect(tags).toEqual([{ id: '2', name: 'foo' }]);
    })
  })

  describe('createTag', () => {
    it('should create a tag', () => {
      let tag: TagInterface | undefined;
      apiService.createTag('bar').subscribe(response => {
        tag = response;
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush({ id: '1', name: 'bar' });
      expect(tag).toEqual({ id: '1', name: 'bar' });
    });
    it('passes the correct body', () => {
      let tag: TagInterface | undefined;
      apiService.createTag('bar').subscribe(response => {
        tag = response;
        // console.log(tag)
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush({ id: '1', name: 'bar' });
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual({ name: 'bar' });
    })
    it('thorws an error if request fails', () => {
      let actualError: HttpErrorResponse | undefined;
      apiService.createTag('foo').subscribe({
        next: () => {
          fail('Success should not be called')
        },
        error: err => {
          // console.log('print1')
          actualError = err;
        }
      })
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      // console.log('print2')      
      req.flush('Server error',{
        status:422,
        statusText:'Unprocessible entity'
      });
      if(!actualError){
        throw new Error("Error needs to be defined");
      }
      expect(actualError.status).toEqual(422)
      expect(actualError.statusText).toEqual('Unprocessible entity')
    })
  })


});


