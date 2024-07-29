import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosDialogComponent } from './componentes/cursos-dialog/cursos-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TamanioFuenteDirective } from './shared/directives/tamanio-fuente.directive';
import { FondoDirective } from './shared/directives/fondo.directive';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogComponent,
    TamanioFuenteDirective,
    FondoDirective,

  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    MatProgressSpinnerModule,

  ],
  exports: [CursosComponent]
})
export class CursosModule { }
