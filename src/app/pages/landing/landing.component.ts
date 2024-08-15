import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Resume } from '../../interfaces/resume';
import { Project } from '../../interfaces/project';
import resumeData from '../../../assets/resume.json';
import projectData from '../../../assets/projects.json';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        NgFor,
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  resume: Resume = resumeData;
  projects: Project[] = projectData;
 }
