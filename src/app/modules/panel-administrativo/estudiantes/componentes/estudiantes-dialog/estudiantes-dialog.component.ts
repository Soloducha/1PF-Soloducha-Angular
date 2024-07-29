import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estudiante } from '../../models';


@Component({
  selector: 'app-estudiantes-dialog',
  templateUrl: './estudiantes-dialog.component.html',
  styleUrls: ['./estudiantes-dialog.component.scss']
})
export class EstudiantesDialogComponent {
  estudianteForm: FormGroup;

  hasError(controlName: string, errorName: string): boolean {
    return this.estudianteForm.controls[controlName].hasError(errorName);
  }

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<EstudiantesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public estudianteAEditar?: Estudiante  
  ) {
    this.estudianteForm = this.fb.group({
      DNI: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Telefono: ['', Validators.required]
    });

    if (this.estudianteAEditar) {
      this.estudianteForm.patchValue(this.estudianteAEditar);
    }
  }


  onSubmit() {
    if (this.estudianteForm.valid) {
      this.matDialogRef.close(this.estudianteForm.value);
    }
  }
}
