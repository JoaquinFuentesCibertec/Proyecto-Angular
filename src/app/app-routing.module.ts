import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLibrosComponent } from './Libro/actualizar-libro/listar-libros/listar-libros.component';
import { RegistrarLibroComponent } from './Libro/actualizar-libro/registrar-libro/registrar-libro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarProveedoresComponent } from './Proveedor/listar-proveedores/listar-proveedores.component';
import { RegistrarProveedoresComponent } from './Proveedor/registrar-proveedores/registrar-proveedores.component';
import { ActualizarLibroComponent } from './Libro/actualizar-libro/actualizar-libro.component';
import { ActualizarProveedorComponent } from './Proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { ListarIntegrantesComponent } from './Integrante/listar-integrantes/listar-integrantes.component';
import { RegistrarIntegrantesComponent } from './Integrante/registrar-integrantes/registrar-integrantes.component';
import { ActualizarIntegrantesComponent } from './Integrante/actualizar-integrantes/actualizar-integrantes.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'listado', component: ListarLibrosComponent},
  {path: 'nuevo', component: RegistrarLibroComponent},
  {path: 'proveedores', component: ListarProveedoresComponent},
  {path: 'nuevoProv', component: RegistrarProveedoresComponent},
  {path: 'actuLibro/:libro',component: ActualizarLibroComponent},
  {path: 'actuProv/:proveedor', component: ActualizarProveedorComponent},
  {path: 'integrantes', component: ListarIntegrantesComponent},
  {path: 'nuevoInt', component: RegistrarIntegrantesComponent},
  {path: 'actuInt/:integrante', component: ActualizarIntegrantesComponent},
  {path:'**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
