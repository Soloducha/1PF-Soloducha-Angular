import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdministrativoRoutingModule } from './panel-administrativo-routing.module';
import { PanelAdministrativoComponent } from './panel-administrativo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AutentificacionModule } from "../autentificacion/autentificacion.module";
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MatListModule } from '@angular/material/list';
import { ClasesModule } from './clases/clases.module';
import { CursosModule } from './cursos/cursos.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    PanelAdministrativoComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    PanelAdministrativoRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AutentificacionModule,
    EstudiantesModule,
    MatListModule,
    ClasesModule,
    CursosModule,
],
  exports: [
    PanelAdministrativoComponent
  ]
})
export class PanelAdministrativoModule { }
