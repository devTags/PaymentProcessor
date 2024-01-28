import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GcashComponent } from './gcash.component';

const routes: Routes = [{ path: '', component: GcashComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GcashRoutingModule { }
