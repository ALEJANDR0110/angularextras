import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SubirImagenComponent } from './components/subir-imagen-component/subir-imagen-component';
import { ServiceImagen } from './services/service.imagen';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, SubirImagenComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceImagen, provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
