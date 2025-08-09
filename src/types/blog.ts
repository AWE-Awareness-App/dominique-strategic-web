export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  category: string;
  content: string;
}

export interface BlogPostData {
  slug: string;
  date: string;
  readTime: string;
  image: string;
  translations: {
    [lang: string]: BlogPostTranslation;
  };
}
