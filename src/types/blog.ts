export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  count: number;
}