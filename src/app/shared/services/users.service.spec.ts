import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { UserInterface } from '../types/user.interface';
import { Utils1Service } from './utils1.service';

describe('UsersService', () => {
  let usersService: UsersService;

  // mock service testing
  // const utilsServiceMock={
  //   pluck:jest.fn()
  // };

  // spy
  let utilsService:Utils1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers:[UsersService,Utils1Service]

      //mock service for isolation
    //   providers:[UsersService,{provide:Utils1Service,useValue:utilsServiceMock}]

    // spy
    providers:[UsersService,Utils1Service]
    });

    usersService = TestBed.inject(UsersService);
    utilsService =TestBed.inject(Utils1Service);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser',()=>{
    it('should add a user',()=>{
      const user:UserInterface={
        id:'3',
        name:'foo'
      }
      usersService.addUser(user)
      expect(usersService.users).toEqual([{id:'3',name:'foo'}])
    })
  })
  describe('removeUser',()=>{
    it('should remove a user',()=>{      
      usersService.users=[{id:'1',name:'foo'},{id:'2',name:'bar'},{id:'3',name:'foobar'},{id:'4',name:'baz'}]
      usersService.removeUser('4')
      expect(usersService.users).toEqual([{id:'1',name:'foo'},{id:'2',name:'bar'},{id:'3',name:'foobar'}])
    })
  })

describe('getUsernames',()=>{
  it('should get usersname',()=>{
    // mock of service
    // utilsServiceMock.pluck.mockReturnValue(['foo']);
    // expect(usersService.getUsernames()).toEqual(['foo']);

    // spy
    jest.spyOn(utilsService,'pluck');
    usersService.users=[{id:'1',name:'foo'},{id:'2',name:'bar'},{id:'3',name:'foobar'},{id:'4',name:'baz'}]
    usersService.getUsernames();
    expect(utilsService.pluck).toHaveBeenCalledWith(usersService.users,'name') 
  })
})

});
