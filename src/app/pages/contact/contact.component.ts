import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Resume } from '../../interfaces/resume';
import resumeData from '../../../assets/resume.json';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  resume: Resume = resumeData;

 }
