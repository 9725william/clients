import { Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ResumenComponent } from './pages/resumen/resumen.component';

export const routes: Routes = [
  { path: '', component: BusquedaComponent },
  { path: 'resumen', component: ResumenComponent }
];
