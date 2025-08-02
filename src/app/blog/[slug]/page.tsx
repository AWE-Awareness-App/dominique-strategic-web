import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { Mdx } from '@/components/mdx';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '@/types/blog';

// Enable static generation for all blog posts
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const postsDir = path.join(process.cwd(), 'src/content/blog');
    const files = fs.readdirSync(postsDir);
    
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => ({
        slug: file.replace(/\.mdx$/, ''),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      ...data,
      content,
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '',
      tags: data.tags || [],
      readingTime: data.readingTime || { minutes: 5 },
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);
  
  if (!post) return;

  const { title, date, excerpt, coverImage } = post as BlogPost;

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: 'article',
      publishedTime: date,
      url: `https://yourdomain.com/blog/${params.slug}`,
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
      twitter: {
        card: 'summary_large_image',
        title,
        description: excerpt,
        images: [coverImage],
      },
    };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Ensure required fields have default values
  const { 
    title = 'Untitled',
    date = new Date().toISOString(),
    excerpt = '',
    coverImage = '',
    tags = [],
    readingTime = { minutes: 5 }
  } = post;

  return (
    <article className="py-16 bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <span>{format(parseISO(date), 'MMMM d, yyyy')}</span>
            <span>•</span>
            <span>{Math.ceil(readingTime.minutes)} min read</span>
          </div>
        </div>

        {coverImage && (
          <div className="relative mb-12 aspect-video rounded-xl overflow-hidden bg-muted">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <Mdx code={post.content} />
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
              <img
                src="/images/author/christian-dominique.jpg"
                alt="Christian Dominique"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Christian Dominique, BSc, MBA</h3>
              <p className="text-muted-foreground">
                Author, Speaker, and President of Dominique Strategic Consulting
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
