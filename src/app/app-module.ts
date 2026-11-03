import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServicePostFiles } from './services/service.post.files';
import { MenuComponent } from './components/menu-component/menu-component';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';

@NgModule({
  declarations: [App, MenuComponent, ApiFilesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePostFiles],
  bootstrap: [App],
})
export class AppModule {}
