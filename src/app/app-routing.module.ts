import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'conduct',
  loadChildren: () => import('./project/project.module')
    .then(m => m.ProjectModule),
}, 
  { path: '', redirectTo: 'conduct', pathMatch: 'full' },
  { path: '**', redirectTo: 'conduct' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
