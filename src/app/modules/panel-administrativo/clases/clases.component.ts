import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Clases } from './models';
import { ClasesService } from '../../../core/services/clases.service';
import { generarIdRandom } from '../../../shared/utilities';
import { MatDialog } from '@angular/material/dialog';
import { ClasesDialogComponent } from './componentes/clases-dialog/clases-dialog.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss'
})
export class ClasesComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    // 'curso',
    'estudiantes',
    'aula',
    'profesor'
  ];

  dataSource : Clases[]= []

  isLoading: boolean = false;

  constructor( 
    private matDialog: MatDialog,
    private clasesService: ClasesService
  ) {}

  ngOnInit(): void {
    this.cargarClases();
  }

  cargarClases() {
    this.isLoading = true;
    this.clasesService
      .obtenerClases()
      .subscribe({
        next: (clases) => {
          this.dataSource = clases;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  openDialog(): void {
    this.matDialog
      .open(ClasesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          value['id'] = 'cla' + generarIdRandom(3);
          this.isLoading = true;
          this.clasesService.agregarClase(value).subscribe({
            next: (clases) => {
              this.dataSource = [...clases];
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        },
      });
  }

  EditarClase(claseAEditar: Clases) {
    this.matDialog.open(ClasesDialogComponent, { data: claseAEditar }).afterClosed().subscribe({
      next: (value) => {
        if (!!value) {
          this.clasesService.editarClase(claseAEditar.id, value).subscribe({
            next: (clases) => {this.dataSource = [...clases];},
          });
        }
      },
    });
  }

  borrarClaseXId(id: string){
    if (confirm('¿Estas seguro?')) {
      this.isLoading = true;
      this.clasesService.borrarClaseXId(id).subscribe({
        next: (clases) => {this.dataSource = [...clases];},
        complete: () => {this.isLoading = false;},
      });
    }
  }
}