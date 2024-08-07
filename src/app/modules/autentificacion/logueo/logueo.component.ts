import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../../core/services/autenticacion.service';
import { APP_CONFIG } from '../../../core/tokens';


@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrl: './logueo.component.scss'
})
export class LogueoComponent {
  loginForm: FormGroup;

  constructor(
    public autenticacionService: AutenticacionService,
    private fb: FormBuilder,
    @Inject(APP_CONFIG) private appConfig: any
  ) {
    this.loginForm = this.fb.group({
      legajo: ['LE000001', [Validators.required]],
      password: ['123456', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const data = {
        legajo: this.loginForm.get('legajo')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.autenticacionService.login(data);
    }
    else {
      alert ('Formulario inválido');
    }
  }
}
