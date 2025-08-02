import { MDXProvider } from '@mdx-js/react';
import { Button } from '@/components/ui/button';

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold my-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold my-5" {...props} />,
  h3: (props: any) => <h2 className="text-2xl font-bold my-4" {...props} />,
  h4: (props: any) => <h3 className="text-xl font-bold my-3" {...props} />,
  p: (props: any) => <p className="my-4 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 my-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 my-2" {...props} />,
  li: (props: any) => <li className="my-1" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 rounded px-1" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
  Button,
};

export function MDXComponents({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

export default components;
