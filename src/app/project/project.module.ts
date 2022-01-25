import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectRoutingModule } from './project-routing.module';
import { TrackProjectComponent } from './track-project/track-project.component';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    RouterModule
  ]
})
export class ProjectModule { }
