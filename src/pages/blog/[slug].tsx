import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { format, parseISO } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useEffect } from 'react';
import MDXComponents from '@/components/mdx-components';

export default function BlogPost({ source, frontMatter, error }: { source: any, frontMatter: any, error?: string }) {
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      console.error('Error loading post:', error);
    }
  }, [error]);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Error loading post</h1>
        <p className="text-muted-foreground">{error}</p>
        <Button onClick={() => router.back()} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back
        </Button>
      </div>
    );
  }

  if (!source) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p>Loading post...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>{frontMatter.title} | Your Blog Name</title>
        <meta name="description" content={frontMatter.excerpt} />
      </Head>
      
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('back')}
      </Button>
      
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{frontMatter.title}</h1>
          <div className="text-muted-foreground mb-4">
            <time dateTime={frontMatter.date}>
              {format(parseISO(frontMatter.date), 'MMMM d, yyyy')}
            </time>
            <span className="mx-2">•</span>
            <span>{frontMatter.author}</span>
          </div>
          {frontMatter.coverImage && (
            <div className="relative w-full h-64 mb-8">
              <img
                src={frontMatter.coverImage}
                alt={frontMatter.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          )}
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </article>
    </div>
  );
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      params: { slug: filename.replace(/\.mdx$/, '') },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    if (!fs.existsSync(fullPath)) {
      return {
        props: {
          source: null,
          frontMatter: null,
          error: `Post not found: ${slug}`
        }
      };
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontMatter, content } = matter(fileContents);
    
    // Validate required frontmatter fields
    if (!frontMatter.title || !frontMatter.date) {
      return {
        props: {
          source: null,
          frontMatter: null,
          error: 'Invalid post format: missing required frontmatter fields'
        }
      };
    }

    // Serialize the MDX content
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: frontMatter,
    });

    return {
      props: {
        source: mdxSource,
        frontMatter: {
          ...frontMatter,
          date: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
        },
      },
    };
  } catch (error) {
    console.error(`Error processing ${slug}:`, error);
    return {
      props: {
        source: null,
        frontMatter: null,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      },
    };
  }
};
