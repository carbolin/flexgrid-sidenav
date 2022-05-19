import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  {
    path: '', component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: WelcomeComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'table',
        loadChildren: () => import('../../pages/table/table.module').then(m => m.TableModule)
      },
      {
        path: 'address-form',
        loadChildren: () => import('../../pages/address-form/address-form.module').then(m => m.AddressFormModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
