import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from './modules/autentificacion/logueo/logueo.component';
import { PanelAdministrativoComponent } from './modules/panel-administrativo/panel-administrativo.component';
import { EstudiantesComponent } from './modules/panel-administrativo/estudiantes/estudiantes.component';
import { CursosComponent } from './modules/panel-administrativo/cursos/cursos.component';
import { ClasesComponent } from './modules/panel-administrativo/clases/clases.component';
import { InicioComponent } from './modules/panel-administrativo/inicio/inicio.component';

const routes: Routes = [

  {path: 'autentificacion', component: LogueoComponent},
  {path: 'panel-administrativo', component: PanelAdministrativoComponent,
  children: [
    {path: 'Inicio', component: InicioComponent},
    {path: 'Estudiantes', component: EstudiantesComponent},
    {path: 'Cursos', component: CursosComponent},
    {path: 'Clases', component: ClasesComponent}
  ]},
  {path: '**', redirectTo: '/panel-administrativo/Inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
