import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Clases } from '../../modules/panel-administrativo/clases/models';


@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private MY_DATABASE = [
    {
      id: 'cla123',
      // curso: {
      //   id: 'curso456',
      //   nombre: 'Introducción a la Programación',
      //   descripcion: 'Un curso para aprender los fundamentos de la programación.',
      //   fechaInicio: new Date('2024-08-01'),
      //   fechaFin: new Date('2024-12-01')
      // },
      estudiantes: [
        {
          DNI: 12345678,
          Nombre: 'Juan',
          Apellido: 'Pérez',
          Telefono: 987654321
        },
        {
          DNI: 87654321,
          Nombre: 'María',
          Apellido: 'García',
          Telefono: 123456789
        }
      ],
      aula: 'Aula 101',
      profesor: 'Dr. Ana López'
    }
  ];

  editarClase(id:string, update: Clases){
    this.MY_DATABASE = this.MY_DATABASE.map((el) =>
      el.id === id ? { ...update, id } : el
    );
    return this.obtenerClases();
  }
  
  buscarClasesXId(search: string): Observable<Clases[]> {
    return this.obtenerClases().pipe(
      map((todosLasClases) =>
        todosLasClases.filter((clase) =>
          clase.id.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  obtenerClases(): Observable<Clases[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.MY_DATABASE);
        observer.complete();
      }, 300);
    });
  }

  obtenerClaseXId(id: string): Observable<Clases | undefined> {
    return new Observable((observer) => {
      observer.next(this.MY_DATABASE.find((clase) => clase.id === id));
      observer.complete();
    });
  }

  agregarClase(nuevaClase: Clases): Observable<Clases[]> {
    this.MY_DATABASE.push(nuevaClase);

    return this.obtenerClases();
  }

  borrarClaseXId(id: string): Observable<Clases[]> {
    this.MY_DATABASE = this.MY_DATABASE.filter((clase) => clase.id !== id);
    return this.obtenerClases();
  }

}
