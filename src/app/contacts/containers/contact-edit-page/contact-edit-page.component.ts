import { Contact } from './../../models/contact.model';
import { ContactsService } from './../../contacts-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  contactsForm: FormGroup;
  mode: string = null;
  contactId: number = null;
  currentContact: Contact = null;
  constructor(private fb: FormBuilder, private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  initAndPatchForm() {
    this.contactsForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      budget: ['', Validators.required]
    });
    this.patchForm();
  }

  patchForm() {
    if (this.mode === 'create') {
      this.currentContact = new Contact('-1');
    } else {
      this.contactsService.fetchContact(this.contactId).subscribe((contact:any) => {
        this.currentContact = new Contact(
          contact.id,
          contact.name,
          contact.dob,
          contact.email,
          contact.gender,
          contact.budget,
        );
        this.contactsForm.patchValue({
          name: this.currentContact.name,
          dob:  this.currentContact.dob,
          email: this.currentContact.email,
          gender:  this.currentContact.gender,
          budget:  this.currentContact.budget,
        })
      });


    }

  }

  onSubmit() {
    this.contactsService.createContact(this.contactsForm.value).subscribe( _ => {
      this.router.navigate(['/contacts']);
    }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactId = +params.id;
      if (this.contactId === -1) {
        this.mode = 'create';
      } else {
        this.mode = 'edit';
      }
    });
    this.initAndPatchForm();
  }

}
