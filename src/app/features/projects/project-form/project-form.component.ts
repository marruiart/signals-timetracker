import { Component, WritableSignal, signal } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { TimeTrackerService } from '../../../core/services/time-tracker.service';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {
  //formData: WritableSignal<{ name: string; description: string }> = signal({ name: '', description: '' });

  constructor(public timeTrackerSvc: TimeTrackerService) { }

  createProject() {
    const newProject: Project = {
      id: Date.now(),
      name: 'New Project',
      description: 'Project Description',
      createdAt: new Date().toISOString()
    };
    this.timeTrackerSvc.saveProject(newProject);
  }
}
