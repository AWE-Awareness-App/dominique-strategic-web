import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export function BlogPost({
  slug,
  title,
  excerpt,
  date,
  readTime,
  coverImage,
  tags = [],
}: BlogPostProps) {
  const { t } = useLanguage();
  
  return (
    <Link 
      to={`/blog/${slug}`}
      className="group block h-full"
    >
      <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 w-full">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
          <div className="mt-auto pt-4 border-t border-border">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{new Date(date).toLocaleDateString()}</span>
              <span>{readTime} {t('blog.readingTime')}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
