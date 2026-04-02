export interface SkillNode {
  id: string;
  label: string;
  description?: string;
  children?: SkillNode[];
  expanded?: boolean;
}
