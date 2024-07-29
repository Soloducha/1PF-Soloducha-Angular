import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from '../../models';

@Component({
  selector: 'app-cursos-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrl: './cursos-dialog.component.scss'
})
export class CursosDialogComponent {
  cursoFormulario: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<CursosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cursoAEditar?: Cursos
  ) {
    this.cursoFormulario = this.fb.group({
      nombre: [null, Validators.required],
      descripcion: [],
      fechaInicio: [],
      fechaFin: [],
    });

    if (this.cursoAEditar) {
      this.cursoFormulario.patchValue(this.cursoAEditar);
    }
  }

  onSubmit() {
    if (this.cursoFormulario.valid) {
      this.matDialogRef.close(this.cursoFormulario.value);
    }
    else {
//testear esto
      console.log('error: ', this.cursoFormulario.errors);
    }
  }
}
