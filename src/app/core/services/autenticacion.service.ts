import { Injectable } from '@angular/core';
import { Usuario } from '../../modules/panel-administrativo/usuarios/models';
import { BehaviorSubject, Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotifierService } from './notificador.service';
import { ambiente } from '../../../ambientes/ambiente';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private TOKEN = 'TOKEN';
  private _authUser$ = new BehaviorSubject<Usuario|null>(null);
  authUser$ = this._authUser$.asObservable();
  constructor(
    private http: HttpClient,
    private router: Router,
    private notifier: NotifierService
  ) {}

  login(data: {legajo: string, password: string}) {
    console.log("aca");
    this.http.get<Usuario[]>(ambiente.apiUrl + '/usuarios',{
      params: {
        legajo: data.legajo,
        password: data.password
      },
    })
    .subscribe({
      next: (response) => {
        if (response.length > 0) {
          const usuarioAutentificado = response[0];
          localStorage.setItem('token', usuarioAutentificado.token);
          this._authUser$.next(usuarioAutentificado);
          this.router.navigate(['panel-administrativo','inicio']);
        } else {
          this.notifier.sendNotification('Credenciales inválidas');
        }
      },
      error: (error) => {
        this.notifier.sendNotification('Error al iniciar sesion: ' + error.message);
      },
    });
  }

  logout() {
    localStorage.removeItem('token');
    this._authUser$.next(null);
    this.router.navigate(['autentificacion','login']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }
    console.log("verificarToken")
    return this.http.get<Usuario[]>(ambiente.apiUrl + '/usuarios', {
      params: {
        token,
      },
    }).pipe(
      map((response) => {
      if (response.length > 0) {
        const usuarioAutentificado = response[0];
        this._authUser$.next(usuarioAutentificado);
        return true;
      }
      else {
        return false;
      }
    })
  );
  }

  obtenerUsuarioObservable(): Observable<any> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next({
          name: 'Name fake',
          email: 'fake@mail.com',
        });
        // observer.complete();
        // observer.error('Error desconocido');
      }, 2000);
    });
  }

  obtenerUsuarioPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject('Error desconocido');

      setTimeout(() => {
        resolve({
          name: 'Name fake',
          email: 'fake@mail.com',
        });
      }, 2000);
    });
  }



}
