import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cursos } from '../../modules/panel-administrativo/cursos/models';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private MY_DATABASE = [
    {
      id: 'cur001',
      nombre: 'Angular',
      descripcion: 'Curso inicial de Angular',
      fechaFin: new Date(),
      fechaInicio: new Date(),
    },
    {
      id: 'cur002',
      nombre: 'Javascript',
      descripcion: 'Curso inicial de Javascript',
      fechaFin: new Date(),
      fechaInicio: new Date(),
    },
    {
      id: 'cur003',
      nombre: 'Photoshop',
      descripcion: 'Curso inicial de Photoshop',
      fechaFin: new Date(),
      fechaInicio: new Date(),
    },
  ];

  editarCursoXId(id: string, update: Cursos) {
    this.MY_DATABASE = this.MY_DATABASE.map((el) =>
      el.id === id ? { ...update, id } : el
    );
    return this.obtenerCursos();
  }

  buscarCursosXNombre(search: string): Observable<Cursos[]> {
    return this.obtenerCursos().pipe(
      map((todosLosCursos) =>
        todosLosCursos.filter((curso) =>
          curso.nombre.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  obtenerCursos(): Observable<Cursos[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.MY_DATABASE);
        observer.complete();
      }, 300);
    });
  }

  obtenerCursoXId(id: string): Observable<Cursos | undefined> {
    return this.obtenerCursos().pipe(
      map((todosLosCursos) => todosLosCursos.find((el) => el.id === id))
    );
  }

  agregarCurso(curso: Cursos): Observable<Cursos[]> {
    this.MY_DATABASE.push(curso);
    return this.obtenerCursos();
  }

  borrarCursoXId(id: string): Observable<Cursos[]> {
    this.MY_DATABASE = this.MY_DATABASE.filter((el) => el.id != id);
    return this.obtenerCursos();
  }
  
}
