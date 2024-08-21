import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BlogEntry } from '../../interfaces/blogEntry';
import blogData from '../../../assets/blog.json';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,

    ],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  blogEntries: BlogEntry[] = blogData;
  activeEntry: BlogEntry | null = null;
  undefinedIdInRoute: boolean = false;
  @Input()
  set id(id: string) {
    const entry = this.blogEntries.find(x => x.id.toString() == id);
    if(entry != undefined){
      this.activeEntry = entry;
      console.log(this.activeEntry);
    } else if (id != undefined) {
      this.undefinedIdInRoute = true;
    }
  }

  ngOnInit() {}
}
