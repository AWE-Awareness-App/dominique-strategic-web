import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Users, Brain, TrendingUp, Calendar, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { format, parseISO } from 'date-fns';
import { staticBlogPosts } from '@/content/blog/Blogs';
import { BlogPostData } from '@/content/blog/Blogs';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  category, 
  image,
  slug,
}: BlogPostData) => {
  const navigate = useNavigate();
  
  return (
  <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
    <div className="relative h-48">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-4 left-4">
        <Badge variant="secondary" className="bg-white/90 text-foreground">
          {category}
        </Badge>
      </div>
    </div>
    <CardHeader>
      <CardTitle className="text-xl group-hover:text-primary transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{format(parseISO(date), 'MMM d, yyyy')}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
      </div>
      <CardDescription className="mb-4 leading-relaxed line-clamp-3">
        {excerpt}
      </CardDescription>
      <Button 
        variant="link" 
        className="px-0 text-primary group-hover:underline mt-auto"
        onClick={() => navigate(`/blog/${slug}`)}
      >
        Read more <ArrowRight className="ml-1 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
  );
};

export default function Blog() {
  const { t } = useLanguage();
  const { i18n } = useTranslation();
  const posts = staticBlogPosts;
  
  // Log the posts to verify they're loaded correctly
  console.log('Blog posts:', posts);

  const features = [
    {
      title: t('blog.features.mentalWellbeing.title'),
      description: t('blog.features.mentalWellbeing.description'),
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: t('blog.features.teamDynamics.title'),
      description: t('blog.features.teamDynamics.description'),
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: t('blog.features.leadership.title'),
      description: t('blog.features.leadership.description'),
      icon: <Brain className="h-6 w-6 text-primary" />
    },
    {
      title: t('blog.features.innovation.title'),
      description: t('blog.features.innovation.description'),
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('blog.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">{t('blog.latestArticles')}</h2>
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};