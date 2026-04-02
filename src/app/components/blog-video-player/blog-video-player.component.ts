import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-video-player.component.html',
  styleUrl: './blog-video-player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogVideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() video!: { src: string; type?: string; poster?: string };
  @Input() dockEnabled = false;

  @ViewChild('videoWrapper') videoWrapper!: ElementRef<HTMLDivElement>;

  isDocked = false;
  isDismissed = false;
  isExpanded = false;

  private observer: IntersectionObserver | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (!this.dockEnabled) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const shouldDock = !entry.isIntersecting || entry.intersectionRatio < 0.3;

        if (shouldDock !== this.isDocked) {
          this.isDocked = shouldDock;

          // Reset dismissed state when scrolling back to inline position
          if (!shouldDock) {
            this.isDismissed = false;
            this.isExpanded = false;
          }

          this.cdr.markForCheck();
        }
      },
      { threshold: [0, 0.3, 1.0] }
    );

    this.observer.observe(this.videoWrapper.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  dismiss(): void {
    this.isDismissed = true;
    this.cdr.markForCheck();
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    this.cdr.markForCheck();
  }

  get videoType(): string {
    return this.video.type ?? 'video/mp4';
  }

  get showDocked(): boolean {
    return this.isDocked && !this.isDismissed && this.dockEnabled;
  }
}
