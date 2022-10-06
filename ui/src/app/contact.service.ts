import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  //private baseUrl = 'https://contact-app-n.herokuapp.com';
  private baseUrl = 'http://localhost:8080';

  createContact(contact:Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:"text"});
  }

  getAllContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContact(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  }

  removeContact(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`,{responseType:"text"})
  }

}
