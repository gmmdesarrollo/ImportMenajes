import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrudArticulosPage } from './crud-articulos.page';
import { ModArticulosPage } from '../mod-articulos/mod-articulos.page';
import { ModArticulosPageModule } from '../mod-articulos/mod-articulos.module';
import { IncArticulosPage } from '../inc-articulos/inc-articulos.page';
import { IncArticulosPageModule } from '../inc-articulos/inc-articulos.module';

const routes: Routes = [
  {
    path: '',
    component: CrudArticulosPage
  }
];

@NgModule({
  entryComponents: [
    ModArticulosPage,
    IncArticulosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModArticulosPageModule,
    IncArticulosPageModule
  ],
  declarations: [CrudArticulosPage]
})
export class CrudArticulosPageModule {}
