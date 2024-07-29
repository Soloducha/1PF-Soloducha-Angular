import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EstudiantesDialogComponent } from './componentes/estudiantes-dialog/estudiantes-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { NombreCompletoPipe } from './shared/pipes/nombre-completo.pipe';
import { TamanioFuenteDirective } from './shared/directives/tamanio-fuente.directive';
import { FondoDirective } from './shared/directives/fondo.directive';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    EstudiantesComponent,
    EstudiantesDialogComponent,
    NombreCompletoPipe,
    TamanioFuenteDirective,
    FondoDirective,

  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinner
  ],
  exports: [
    EstudiantesComponent
  ]
})
export class EstudiantesModule { }
