import { SharedModule } from './../../modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OeuvreCreatePageRoutingModule } from './oeuvre-create-routing.module';

import { OeuvreCreatePage } from './oeuvre-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OeuvreCreatePageRoutingModule
  ],
  declarations: [OeuvreCreatePage]
})
export class OeuvreCreatePageModule {}
