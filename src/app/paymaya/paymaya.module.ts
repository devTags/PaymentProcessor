import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymayaComponent } from './paymaya.component';
import { PaymayaRoutingModule } from './paymaya-routing.module';



@NgModule({
  declarations: [
    PaymayaComponent
  ],
  imports: [
    CommonModule,
    PaymayaRoutingModule
  ]
})
export class PaymayaModule { }
