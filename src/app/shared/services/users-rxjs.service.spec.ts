import { TestBed } from '@angular/core/testing';

import { UsersRxjsService } from './users-rxjs.service';
import { UserInterface } from '../types/user.interface';

describe('UsersRxjsService', () => {
  let service: UsersRxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[UsersRxjsService]
    });
    service = TestBed.inject(UsersRxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addUser',()=>{
    it('should add a user',()=>{
      const user:UserInterface={
        id:'3',
        name:'foo'
      }
      service.addUser(user)
      expect(service.users$.getValue()).toEqual([{id:'3',name:'foo'}])
    })
  })
  describe('removeUser',()=>{
    it('should remove a user',()=>{      
      service.users$.next([{id:'1',name:'foo'},{id:'2',name:'bar'},{id:'3',name:'foobar'},{id:'4',name:'baz'}])
      service.removeUser('4')
      expect(service.users$.getValue()).toEqual([{id:'1',name:'foo'},{id:'2',name:'bar'},{id:'3',name:'foobar'}])
    })
  })
});
