import { Contact } from './../../models/contact.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() select: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  oncontactClick(id) {
    this.select.emit(id);
  }


}
