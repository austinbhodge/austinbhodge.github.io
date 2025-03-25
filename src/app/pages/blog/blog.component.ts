import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogEntry } from '../../interfaces/blogEntry';
import blogData from '../../../assets/blog.json';
import { Router, RouterLink } from '@angular/router';
import { marked } from 'marked';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        HttpClientModule
    ],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  blogEntries: BlogEntry[] = blogData;
  activeEntry: BlogEntry | null = null;
  undefinedIdInRoute: boolean = false;
  markdownContent: SafeHtml = '';

  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {}

  @Input()
  set id(id: string) {
    const entry = this.blogEntries.find(x => x.id.toString() == id);
    if(entry != undefined){
      this.activeEntry = entry;
      this.loadMarkdown(entry.file);
    } else if (id != undefined) {
      this.undefinedIdInRoute = true;
    }
  }

  ngOnInit() {}

  setActiveEntry(entry: BlogEntry) {
    this.activeEntry = entry;
   this.loadMarkdown(entry.file);
  }

  clearActiveEntry() {
    this.activeEntry = null;
    this.markdownContent = '';
    this.router.navigate(['/blog']);
  }

  ngOnDestroy(): void {
    this.activeEntry = null;
  }

  private loadMarkdown(filePath: string) {
    this.http.get(`assets/blog/${filePath}`, { responseType: 'text' }).subscribe(
      data => {
        console.log(data);
        const result = marked(data);
        if (result instanceof Promise) {
          console.log(result);
          result.then(content => this.markdownContent = this.sanitizer.bypassSecurityTrustHtml(content));
        } else {
          this.markdownContent = this.sanitizer.bypassSecurityTrustHtml(result);
          console.log(this.markdownContent);
        }
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error loading markdown file:', error);
        this.markdownContent = this.sanitizer.bypassSecurityTrustHtml('Error loading content. Please try again later.');
        this.cdr.detectChanges();
      }
    );
  }
}
