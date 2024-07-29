import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstudiantesDialogComponent } from './componentes/estudiantes-dialog/estudiantes-dialog.component';
import { Estudiante } from './models';
import { EstudiantesService } from '../../../core/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.scss'
})
export class EstudiantesComponent { 

displayedColumns: string[] = [
  'DNI',
  'NombreCompleto',
  'Telefono',
  'Acciones',
];
constructor(
  private matDialog: MatDialog,
  private estudiantesService: EstudiantesService
) {}

dataSource: Estudiante[] = [];

isLoading = false;

ngOnInit(): void {
  this.cargarEstudiantes();
}

cargarEstudiantes(){
  this.estudiantesService.obtenerEstudiantes().subscribe({
    next:(estudiante) => { 
    this.dataSource=estudiante;
    },
    complete: () => {
    this.isLoading = false;
    },
  });
}

openDialog():void {
  this.matDialog.open(EstudiantesDialogComponent)
  .afterClosed()
  .subscribe({
    next:(value) => { 
    this.dataSource=[...this.dataSource, value];
  },})
}

BorrarEstudianteXDNI(DNI:number){
  // this.dataSource=this.dataSource.filter(elemento=>elemento.DNI!=DNI)
  if (confirm('¿Estas seguro?')) {
    this.isLoading = true;
    this.estudiantesService.borrarEstudianteXDNI(DNI).subscribe({
      next:(estudiantes) => {
        this.dataSource=[...estudiantes];
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}

EditarEstudiante(estudianteAEditar: Estudiante){
  this.matDialog.open(EstudiantesDialogComponent, { data: estudianteAEditar }).afterClosed().subscribe({
    next:(value) => { 
      if(!!value){
        this.estudiantesService.editarEstudianteXDNI(estudianteAEditar.DNI, value).subscribe({
          next:(estudiantes) => {this.dataSource=[...estudiantes];},
        });
      }
    },
  });
}
}