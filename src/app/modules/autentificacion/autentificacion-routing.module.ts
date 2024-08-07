import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from './logueo/logueo.component';

const routes: Routes = [

  {path: 'logueo', component: LogueoComponent},
  {path: '**', redirectTo: '/logueo'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
