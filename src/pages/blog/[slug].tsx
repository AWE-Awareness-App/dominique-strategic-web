import { useNavigate, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { staticBlogPosts } from '@/content/blog/Blogs';
import { BlogPostData } from '@/types/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

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

  const post = staticBlogPosts.find((blog: BlogPostData) => blog.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('blog.error.postNotFound')}</h1>
        <p>{t('blog.error.postNotFoundDescription')}</p>
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

  // Get the translation for the current language, fallback to English if not available
  const translation = post.translations[language] || post.translations['en'];

  if (!translation) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('blog.error.translationNotFound')}</h1>
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
        variant="ghost"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('blog.actions.back')}
      </Button>

      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{translation.title}</h1>

        <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8 gap-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} {t('blog.minRead')}</span>
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            <span>{translation.category}</span>
          </div>
        </div>

        {post.image && (
          <img
            src={post.image}
            alt={translation.title}
            className="w-full h-auto rounded-lg mb-8"
          />
        )}

        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="text-xl mb-4">{children}</p>,
            h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            li: ({ children }) => <li className="mb-2">{children}</li>,
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-orange-300 pl-4 italic my-4">
                {children}
              </blockquote>
            ),
            // Simplified code block handling
            code: ({ className, children }) => (
              <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                {children}
              </pre>
            ),
            img: ({ src, alt }) => (
              <div className="my-6">
                <img
                  src={src}
                  alt={alt || ''}
                  className="rounded-lg shadow-md w-full h-auto"
                  loading="lazy"
                />
              </div>
            )
          }}
        >
          {translation.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
