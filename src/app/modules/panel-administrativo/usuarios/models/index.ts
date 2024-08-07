export type TipoUsuario = 'ADMIN' | 'EMPLOYEE';

export interface Usuario {
    legajo: string;
    email: string;
    password: string;
    tipo: TipoUsuario;
    nombre: string;
    apellido: string;
    token: string;
}