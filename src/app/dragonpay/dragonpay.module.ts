import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonpayRoutingModule } from './dragonpay-routing.module';
import { DragonpayComponent } from './dragonpay.component';



@NgModule({
  declarations: [
    DragonpayComponent
  ],
  imports: [
    CommonModule,
    DragonpayRoutingModule
  ]
})
export class DragonpayModule { }
