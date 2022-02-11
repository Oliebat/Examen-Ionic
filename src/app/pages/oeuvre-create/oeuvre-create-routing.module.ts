import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OeuvreCreatePage } from './oeuvre-create.page';

const routes: Routes = [
  {
    path: '',
    component: OeuvreCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OeuvreCreatePageRoutingModule {}
