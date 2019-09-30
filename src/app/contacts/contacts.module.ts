import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { HttpClientModule } from '@angular/common/http';

const barrel = [
  fromContainers.ContactPageComponent,
  fromContainers.ContactEditPageComponent,
  fromComponents.ContactListComponent,
  fromComponents.ContactEditFormComponent,
  fromComponents.ContactComponent
];

@NgModule({
  declarations: barrel,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
