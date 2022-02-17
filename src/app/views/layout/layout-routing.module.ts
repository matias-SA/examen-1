import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { HomeComponent } from '../home/home.component';
import { IcecreamComponent } from '../icecream/icecream.component';
import { PipesComponent } from '../pipes/pipes.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'icecream', component: IcecreamComponent },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
