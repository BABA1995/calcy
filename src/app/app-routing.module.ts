import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalciComponent } from './calci/calci.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/calci',
  pathMatch: 'full'
},
  { path: 'calci', component: CalciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
