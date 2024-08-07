import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { MatCardModule } from '@angular/material/card';
import { LogueoComponent } from './logueo/logueo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { APP_CONFIG } from '../../core/tokens';


@NgModule({
  declarations: [
    LogueoComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    LogueoComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: {
      baseURL: '...',
      version: '2.0'
    }},
  ],
})
export class AutentificacionModule { }
