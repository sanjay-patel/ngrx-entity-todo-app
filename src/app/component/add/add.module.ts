import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddRoutingModule
  ]
})
export class AddModule { }
