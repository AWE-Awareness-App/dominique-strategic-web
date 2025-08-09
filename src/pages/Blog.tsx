import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Users, Brain, TrendingUp, Calendar, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { format, parseISO } from 'date-fns';
import { staticBlogPosts } from '@/content/blog/Blogs';
import { BlogPostData } from '@/types/blog';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps extends BlogPostData {
  language: string;
}

const BlogCard = ({ 
  date, 
  readTime, 
  image,
  slug,
  translations,
  language
}: BlogCardProps) => {
  const navigate = useNavigate();
  
  // Get the translation for the current language, fallback to English if not available
  const translation = translations[language] || translations['en'];
  
  if (!translation) {
    return null; // Skip rendering if no translation is available
  }
  
  return (
    <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={translation.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {translation.category}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {translation.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{format(parseISO(date), 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
        </div>
        <CardDescription className="mb-4 leading-relaxed line-clamp-3 flex-grow">
          {translation.excerpt}
        </CardDescription>
        <div className="mt-auto">
          <Button 
            variant="link" 
            className="px-0 text-primary group-hover:underline mt-2"
            onClick={() => navigate(`/blog/${slug}`)}
          >
            Read more <ArrowRight className="ml-1 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Blog() {
  const { t, language } = useLanguage();
  const { i18n } = useTranslation();
  
  // Get posts with the current language
  const posts = staticBlogPosts;
  
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );


  return (
    <div className="container py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('blog.subtitle')}
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">{t('blog.latestArticles')}</h2>
        {sortedPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <BlogCard 
                key={post.slug} 
                {...post} 
                language={language}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};