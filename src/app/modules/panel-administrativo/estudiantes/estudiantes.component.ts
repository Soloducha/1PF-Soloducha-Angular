import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstudiantesDialogComponent } from './componentes/estudiantes-dialog/estudiantes-dialog.component';
import { Estudiante } from './models';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss'
})
export class EstudiantesComponent { 
displayedColumns: string[] = ['DNI', 'NombreCompleto', 'Telefono', 'Acciones'];

dataSource : Estudiante[] = [
  {DNI: 23723948, Nombre: 'Juan Carlos', Apellido: 'Lopez', Telefono: 1234456 },
  {DNI: 40724971, Nombre: 'Esteban', Apellido: 'Rodriguez', Telefono: 11444356},
  {DNI: 29222938, Nombre: 'Manuel', Apellido: 'Pepito', Telefono: 46218787},
];

constructor(private matDialog: MatDialog){}
openDialog():void {
  this.matDialog.open(EstudiantesDialogComponent)
  .afterClosed()
  .subscribe({
    next:(value) => { 
    console.log(value)
    this.dataSource=[...this.dataSource, value];
  },})
}

BorrarEstudianteporDNI(DNI:number){
  this.dataSource=this.dataSource.filter(elemento=>elemento.DNI!=DNI)
}

EditarEstudiante(EstudianteAEditar:Estudiante){
  this.matDialog.open(EstudiantesDialogComponent, {
    data: EstudianteAEditar
  })
  .afterClosed()
  .subscribe({
    next:(value) => { 
    console.log(value)
    this.dataSource=this.dataSource.map(elemento => elemento.DNI == value.DNI ? value : elemento);
  },})
} 
}