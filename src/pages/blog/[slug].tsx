import { useNavigate, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { staticBlogPosts } from '@/content/blog/Blogs';


export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  if (!slug) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('blog.error.invalidUrl')}</h1>
        <p>{t('blog.error.noPostSpecified')}</p>
        <Button 
          onClick={() => navigate('/blog')} 
          variant="default" 
          className="mt-4"
        >
          {t('blog.actions.backToBlog')}
        </Button>
      </div>
    );
  }
  
  const post = staticBlogPosts.find((blog) => {
    return blog.slug === slug;
  });
  
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <p>{t('blog.error.postNotFound')}</p>
        <Button 
          onClick={() => navigate('/blog')} 
          variant="default" 
          className="mt-4"
        >
          {t('blog.actions.backToBlog')}
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 pt-24 pb-8 min-h-screen">
      <Button 
        onClick={() => navigate(-1)} 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('blog.actions.back')}
      </Button>
      
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <div className="flex items-center mr-6">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} {t('blog.minRead')}</span>
          </div>
          <div className="ml-6 flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            <span>{post.category}</span>
          </div>
        </div>
        
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto rounded-lg mb-8"
          />
        )}
        
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
