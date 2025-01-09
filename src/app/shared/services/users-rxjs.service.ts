import { Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersRxjsService {

  // users:UserInterface[]=[];

  users$=new BehaviorSubject<UserInterface[]>([]);


  constructor() { }

  addUser(user:UserInterface):void{
    this.users$.next([...this.users$.getValue(),user]);
  }

  removeUser(userId:string){
    const updatedUsers=this.users$.getValue().filter(user=>userId!==user.id)
    this.users$.next(updatedUsers);
  }

 
}
