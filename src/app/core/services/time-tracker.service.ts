import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackerService {

  private $_projects: WritableSignal<Project[]> = signal([]);
  get projects(): Signal<Project[]> {
    return this.$_projects;
  }

  constructor() { }

  saveProject(project: Project) {
    this.$_projects.update(projects => [...projects, project]);
  }
}
