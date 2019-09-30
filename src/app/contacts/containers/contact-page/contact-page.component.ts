import { Router } from '@angular/router';
import { ContactsService } from './../../contacts-service.service';
import { Contact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  constructor(private contactsService: ContactsService, private router: Router ) { }

  ngOnInit() {
    this.contacts$ = this.contactsService.fetchContacts();
  }

  onContactSelect(id) {
    this.router.navigate(['/contacts/', id]);
  }

}
