import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { Utils1Service } from './utils1.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  utilsService = inject(Utils1Service)
  users:UserInterface[]=[];

  constructor() { }

  addUser(user:UserInterface):void{
    this.users=[...this.users,user];
  }

  removeUser(userId:string){
    const updatedUsers=this.users.filter(user=>userId!==user.id)
    this.users=updatedUsers;
  }

  getUsernames():string[]{
    return this.utilsService.pluck(this.users,'name');
  }

}
