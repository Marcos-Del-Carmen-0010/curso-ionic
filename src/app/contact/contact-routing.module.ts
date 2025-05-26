import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
  {
    path: 'formulario-contacto',
    component: FormContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
