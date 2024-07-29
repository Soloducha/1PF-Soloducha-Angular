// dialog-clases.component.ts
import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudiantesService } from '../../../../../core/services/estudiantes.service';
import { Observable, of } from 'rxjs';
import { Cursos } from '../../../cursos/models';
import { Estudiante } from '../../../estudiantes/models';
import { Clases } from '../../models';

@Component({
  selector: 'app-clases-dialog',
  templateUrl: './clases-dialog.component.html',
  styleUrl: './clases-dialog.component.scss'
})
export class ClasesDialogComponent implements OnInit {
  claseForm: FormGroup;
  listaEstudiantes: Observable<Estudiante[]> = of([]);;

  constructor(
    public dialogRef: MatDialogRef<ClasesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public claseAEditar: Clases,
    private fb: FormBuilder,
    public estudianteService: EstudiantesService
  ) {
    this.claseForm = this.fb.group({
      estudiantes: [[], Validators.required],
      aula: ['', Validators.required],
      profesor: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.listaEstudiantes = this.estudianteService.obtenerEstudiantes();
  }


  onSubmit() {
    if (this.claseForm.valid) {
      this.dialogRef.close(this.claseForm.value);
    }
    else {
//testear esto
      console.log('error: ', this.claseForm.errors);
    }
  }
}
