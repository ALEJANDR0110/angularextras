import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';

const routes: Routes = [
  {path: "", component: ApiFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
