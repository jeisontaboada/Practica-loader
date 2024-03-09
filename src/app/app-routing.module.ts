import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';
import { BtnStartLoaderComponent } from './components/btn-start-loader/btn-start-loader.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start', // Redirige al Loader por defecto
    pathMatch: 'full'
  },
  {
    path: 'loader',
    component: LoaderComponent
  },

  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'start',
    component: BtnStartLoaderComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
