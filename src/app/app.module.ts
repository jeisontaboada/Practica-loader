import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; // Importa el IonicModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { RouteReuseStrategy, RouterLink } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BtnStartLoaderComponent } from './components/btn-start-loader/btn-start-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    MenuComponent,
    BtnStartLoaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
