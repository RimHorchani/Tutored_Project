import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskComponent } from './risk/risk.component';


const routes: Routes = [
  { path: 'risk', component: RiskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
