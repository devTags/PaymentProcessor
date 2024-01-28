import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sharedcomponents/sidenav/sidenav.component';

const routes: Routes = [
  { redirectTo: 'Login', path: '', pathMatch: 'full' },
  { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  {
    component: SidenavComponent, path: '', children: [
      { redirectTo: 'Profile', path: '', pathMatch: 'full' },
      { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },

      { path: 'Gcash', loadChildren: () => import('./gcash/gcash.module').then(m => m.GcashModule) },

      { path: 'Paymaya', loadChildren: () => import('./paymaya/paymaya.module').then(m => m.PaymayaModule) },

      { path: 'Dragonpay', loadChildren: () => import('./dragonpay/dragonpay.module').then(m => m.DragonpayModule) },

    ]
  },
  
  { path: 'About', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
