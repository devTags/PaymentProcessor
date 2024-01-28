import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymayaComponent } from './paymaya.component';

const routes: Routes = [{ path: '', component: PaymayaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymayaRoutingModule { }
