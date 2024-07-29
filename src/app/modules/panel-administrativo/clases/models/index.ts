import { Cursos } from "../../cursos/models";
import { Estudiante } from "../../estudiantes/models";

export interface Clases {
    id: string; 
    // curso: Cursos; 
    estudiantes: Estudiante[]; 
    aula: string;
    profesor: string;
}