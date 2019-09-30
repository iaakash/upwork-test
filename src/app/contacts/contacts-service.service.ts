import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  BASE_API: string = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  createContact(body) {
    return this.http.post(`${this.BASE_API}contacts`, body);
  }

  fetchContact(id: number) {
    return this.http.get(`${this.BASE_API}contacts/${id}`);
  }

  fetchContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.BASE_API}contacts`);
  }
}
