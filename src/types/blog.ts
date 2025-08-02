export interface BlogPost {
  slug: string;
  content: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  tags?: string[];
  readingTime?: {
    minutes: number;
  };
  [key: string]: any; // For any additional frontmatter
}
