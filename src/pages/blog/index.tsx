import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    author: string;
    coverImage?: string;
  };
}

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back_to_home') || 'Back to Home'}
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {post.frontMatter.title}
              </h2>
              <div className="text-muted-foreground text-sm mb-4">
                <time dateTime={post.frontMatter.date}>
                  {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.frontMatter.author}</span>
              </div>
              <p className="text-muted-foreground">{post.frontMatter.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.mdx$/, ''),
        frontMatter: {
          ...data,
          date: data.date ? new Date(data.date).toISOString() : null,
        },
      };
    })
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });

  return {
    props: {
      posts,
    },
  };
};
