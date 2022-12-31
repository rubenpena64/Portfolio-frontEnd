import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { DesarrollosComponent } from './componentes/desarrollos/desarrollos.component';
import { HttpClientModule} from '@angular/common/http';
import { TripleTxFormComponent } from './componentes/triple-tx-form/triple-tx-form.component'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DobleTxFormComponent } from './componentes/doble-tx-form/doble-tx-form.component';
import { DesaFormComponent } from './componentes/desa-form/desa-form.component';
import { AcercaFormComponent } from './componentes/acerca-form/acerca-form.component';

const appRoutes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'login', component: LoginComponent}]

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    DesarrollosComponent,   
    TripleTxFormComponent,
    InicioComponent,
    LoginComponent,
    DobleTxFormComponent,
    DesaFormComponent,
    AcercaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot (appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
