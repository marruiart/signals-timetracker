import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectFormComponent } from './features/projects/project-form/project-form.component';
import { TimeTrackerService } from './core/services/time-tracker.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProjectFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals-timetracker';

  constructor(public timeTrackerSvc: TimeTrackerService) { }
}
