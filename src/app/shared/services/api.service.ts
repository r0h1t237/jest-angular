import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagInterface } from '../types/tag.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl='http://localhost:3004';

  constructor(private httpClient:HttpClient) { }

  getTags():Observable<TagInterface[]>{
    return this.httpClient.get<TagInterface[]>(`${this.apiUrl}/tags`);
  }

  createTag(name:string):Observable<TagInterface>{
    return this.httpClient.post<TagInterface>(`${this.apiUrl}/tags`,{name})
  }
}
