import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {


  ngOnInit() {}


}
