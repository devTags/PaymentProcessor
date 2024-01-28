import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonpayComponent } from './dragonpay.component';

const routes: Routes = [{ path: '', component: DragonpayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonpayRoutingModule { }
