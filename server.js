const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const matter = require('gray-matter');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// API route to get all blog posts
app.get('/api/blog', async (req, res) => {
  try {
    const postsDir = path.join(__dirname, 'src/content/blog');
    const files = await fs.readdir(postsDir);
    
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, '');
          const filePath = path.join(postsDir, file);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContents);
          
          return {
            slug,
            title: data.title || 'Untitled',
            excerpt: data.excerpt || '',
            date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
            readTime: data.readTime || '5 min',
            category: data.category || 'Uncategorized',
            image: data.image || '',
          };
        })
    );

    // Sort posts by date (newest first)
    const sortedPosts = posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    res.json(sortedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// API route to get a single blog post
app.get('/api/blog/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const filePath = path.join(__dirname, 'src/content/blog', `${slug}.mdx`);
    
    try {
      await fs.access(filePath);
    } catch (error) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    if (!data.title || !data.date) {
      return res.status(400).json({ error: 'Invalid post format' });
    }

    res.json({
      ...data,
      content,
      slug,
      date: new Date(data.date).toISOString(),
    });
  } catch (error) {
    console.error(`Error fetching blog post ${req.params.slug}:`, error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // Handle SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
