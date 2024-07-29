import { Component, OnInit } from '@angular/core';
import { Cursos } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CursosService } from '../../../core/services/cursos.service';
import { CursosDialogComponent } from './componentes/cursos-dialog/cursos-dialog.component';
import { generarIdRandom } from '../../../shared/utilities';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  nombreCurso = '';

  displayedColumns: string[] = [
    'id',
    'nombre',
    'descripcion',
    'fechaInicio',
    'fechaFin',
    'acciones',
  ];

  dataSource: Cursos[] = [];

  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.isLoading = true;
    this.cursosService.obtenerCursos().subscribe({
      next: (cursos) => {
        this.dataSource = cursos;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openDialog(): void {
    this.matDialog
      .open(CursosDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          this.nombreCurso = value.name; //chequear TODO:
          value['id'] = 'cur' + generarIdRandom(3);
          this.isLoading = true;
          this.cursosService.agregarCurso(value).subscribe({
            next: (cursos) => {
              this.dataSource = [...cursos];
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        },
      });
  }

  editarCurso(cursoAEditar: Cursos) {
    this.matDialog.open(CursosDialogComponent, { data: cursoAEditar }).afterClosed().subscribe({
        next: (value) => {
          if (!!value) {
            this.cursosService.editarCursoXId(cursoAEditar.id, value).subscribe({
              next: (cursos) => {this.dataSource = [...cursos];},
            });
          }
        },
    });
  }

  borrarCursoXID(id: string) {
    if (confirm('¿Estas seguro?')) {
      this.isLoading = true;
      this.cursosService.borrarCursoXId(id).subscribe({
        next: (cursos) => {
          this.dataSource = [...cursos];
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}