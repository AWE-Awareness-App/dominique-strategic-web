import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const postsDir = path.join(process.cwd(), 'src/content/blog');
    const files = fs.readdirSync(postsDir);
    
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const filePath = path.join(postsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        return {
          slug: file.replace(/\.mdx$/, ''),
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          coverImage: data.coverImage || '',
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <div className="text-gray-500 text-sm mb-2">
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </div>
            
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="text-primary hover:underline inline-flex items-center"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
