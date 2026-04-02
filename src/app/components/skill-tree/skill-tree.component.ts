import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillNode } from '../../interfaces/skill-tree';
import skillTreeData from '../../../assets/skill-tree.json';

@Component({
  selector: 'app-skill-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-tree.component.html',
  styleUrl: './skill-tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillTreeComponent implements OnInit {
  treeData!: SkillNode;
  families: SkillNode[] = [];
  activeFamily: SkillNode | null = null;
  hoveredNode: string | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.treeData = skillTreeData as SkillNode;
    this.families = this.treeData.children || [];
    if (this.families.length > 0) {
      this.activeFamily = this.families[0];
    }
  }

  selectFamily(family: SkillNode): void {
    this.activeFamily = family;
    this.cdr.markForCheck();
  }

  formatLabel(label: string): string {
    return label.replace(/_/g, ' ');
  }

  onNodeHover(id: string): void {
    this.hoveredNode = id;
    this.cdr.markForCheck();
  }

  onNodeLeave(): void {
    this.hoveredNode = null;
    this.cdr.markForCheck();
  }
}
