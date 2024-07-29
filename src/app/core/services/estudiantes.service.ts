import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Estudiante } from '../../modules/panel-administrativo/estudiantes/models';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private MY_DATABASE: Estudiante[] = [
    {
      DNI: 23723948, 
      Nombre: 'Juan Carlos', 
      Apellido: 'Lopez', 
      Telefono: 1591234456 
    },
    {
      DNI: 40724971, 
      Nombre: 'Esteban', 
      Apellido: 'Rodriguez', 
      Telefono: 1111444356
    },
    {
      DNI: 29222938, 
      Nombre: 'Manuel', 
      Apellido: 'Pepito', 
      Telefono: 1146218787
    },
  ];

  editarEstudianteXDNI(dni: number, update: Estudiante) {
    this.MY_DATABASE = this.MY_DATABASE.map((el) =>
      el.DNI === dni ? { ...update, dni } : el
    );
    return this.obtenerEstudiantes();
  }

  buscarEstudiantesXNombre(search: string): Observable<Estudiante[]> {
    return this.obtenerEstudiantes().pipe(
      map((todosLosEstudiantes) =>
        todosLosEstudiantes.filter((estudiante) =>
          estudiante.Nombre.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return new Observable((observer) => {
        observer.next(this.MY_DATABASE);
        observer.complete();
      } )
      ;
  }


  obtenerEstudianteXDNI(dni: number): Observable<Estudiante | undefined> {
    return this.obtenerEstudiantes().pipe(
      map((todosLosEstudiantes) => todosLosEstudiantes.find((el) => el.DNI === dni))
    );
  }

  agregarEstudiante(estudiante: Estudiante): Observable<Estudiante[]> {
    this.MY_DATABASE.push(estudiante);
    return this.obtenerEstudiantes();
  }

  borrarEstudianteXDNI(dni: number): Observable<Estudiante[]> {
    this.MY_DATABASE = this.MY_DATABASE.filter((el) => el.DNI != dni);
    return this.obtenerEstudiantes();
  }
  
}