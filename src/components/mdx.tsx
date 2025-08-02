'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';

const components = {
  h1: (props: any) => (
    <h1
      className="text-4xl font-bold mt-10 mb-6 text-foreground"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-3xl font-bold mt-10 mb-4 text-foreground pt-8 border-t border-border first:border-0 first:pt-0"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-xl font-semibold mt-6 mb-2 text-foreground" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg leading-relaxed mb-6 text-foreground/90" {...props} />
  ),
  a: (props: any) => (
    <Link
      href={props.href || '#'}
      className="text-primary hover:underline underline-offset-4"
      {...props}
    >
      {props.children}
    </Link>
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="text-foreground/90" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="pl-4 border-l-4 border-primary bg-muted/50 py-2 my-6 italic"
      {...props}
    />
  ),
  img: (props: any) => (
    <div className="my-8 rounded-lg overflow-hidden">
      <Image
        {...props}
        alt={props.alt || 'Blog post image'}
        className="rounded-lg w-full h-auto"
        width={1200}
        height={630}
      />
      {props.title && (
        <p className="text-center text-sm text-muted-foreground mt-2">
          {props.title}
        </p>
      )}
    </div>
  ),
  // Add more components as needed
};

export async function Mdx({ code }: { code: string }) {
  const { content } = await compileMDX({
    source: code,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return content;
}
