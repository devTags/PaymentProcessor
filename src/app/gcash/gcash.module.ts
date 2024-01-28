import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcashRoutingModule } from './gcash-routing.module';
import { GcashComponent } from './gcash.component';




@NgModule({
  declarations: [
    GcashComponent
  ],
  imports: [
    CommonModule,
    GcashRoutingModule
  ]
})
export class GcashModule { }
