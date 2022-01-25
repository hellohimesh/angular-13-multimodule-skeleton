import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent} from './project.component';
import { TrackProjectComponent} from './track-project/track-project.component';
const routes: Routes = [{
  path:'',
  component: ProjectComponent,
  children :[{
    path: 'dashboard',
    component: TrackProjectComponent
  }]
},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
