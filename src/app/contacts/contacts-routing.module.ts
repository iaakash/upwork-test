import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './containers';

const routes: Routes = [
  {
    path: '',
    component: containers.ContactPageComponent
  },
  {
    path: ':id',
    component: containers.ContactEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
