import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { LoaderComponent } from '../components/loader/loader.component';


const layout: Array<any> = [
    HeaderComponent,
    LoaderComponent,
   
];

@NgModule({
    declarations: layout,
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    exports: layout,
})
export class SharedModule { }
