import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PanelAdministrativoModule } from './modules/panel-administrativo/panel-administrativo.module';
import { AutentificacionModule } from './modules/autentificacion/autentificacion.module';
import { ClasesModule } from './modules/panel-administrativo/clases/clases.module';
import { CoreModule } from './core/core.module';
import { CursosModule } from './modules/panel-administrativo/cursos/cursos.module';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelAdministrativoModule,
    AutentificacionModule,
    CoreModule,
    ClasesModule,
    CursosModule,
  ],
  providers: [
    provideAnimationsAsync(), provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
