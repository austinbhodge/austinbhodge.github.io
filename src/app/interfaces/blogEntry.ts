export interface BlogEntry {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  file?: string;
  tags: string[];
  video?: {
    src: string;
    type?: string;
    poster?: string;
  };
}
