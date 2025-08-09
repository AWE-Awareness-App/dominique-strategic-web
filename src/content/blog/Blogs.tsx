

export interface BlogPostData {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string;
    excerpt: string;
}

export const staticBlogPosts: BlogPostData[] = [
    {
      slug: 'welcome-to-the-blog',
      title: 'Welcome to Our Blog',
      excerpt: 'This is the first post on our new blog. Stay tuned for more content about mental health, team dynamics, and leadership.',
      date: new Date().toISOString(),
      readTime: '5 min read',
      category: 'Announcement',
      image: '/images/blog-placeholder.jpg',
      content: `# Welcome to Our Blog
  
  Thank you for visiting our new blog! We're excited to share valuable insights about mental health, team dynamics, and leadership in the workplace.
  
  ## What to Expect
  - Expert advice on workplace wellbeing
  - Tips for improving team communication
  - Leadership strategies for the modern workplace
  - Personal development resources
  
  We'll be updating this space regularly with new content, so be sure to check back often!`
    },
    {
      slug: 'importance-of-mental-health',
      title: 'The Importance of Mental Health in the Workplace',
      excerpt: 'Exploring why mental health matters in professional environments and how to foster a supportive culture.',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: '8 min read',
      category: 'Wellbeing',
      image: '/images/blog-placeholder-2.jpg',
      content: `# The Importance of Mental Health in the Workplace
  
  Mental health is just as important as physical health, especially in the workplace where we spend a significant portion of our lives.
  
  ## Why It Matters
  - Increased productivity and engagement
  - Reduced absenteeism and presenteeism
  - Better team dynamics and collaboration
  - Improved employee retention
  
  ## How to Support Mental Health at Work
  1. Create an open and supportive environment
  2. Provide mental health resources and training
  3. Encourage work-life balance
  4. Recognize and reward employees' efforts
  
  Remember, a mentally healthy workplace benefits everyone!`
    },
    {
      slug: 'building-strong-teams',
      title: 'Building Stronger Teams Through Communication',
      excerpt: 'Learn effective communication strategies that can help build more cohesive and productive teams.',
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: '6 min read',
      category: 'Teamwork',
      image: '/images/blog-placeholder-3.jpg',
      content: `# Building Stronger Teams Through Communication
  
  Effective communication is the cornerstone of any successful team. Here's how to improve it in your workplace.
  
  ## Key Communication Strategies
  
  ### Active Listening
  - Give full attention to the speaker
  - Show that you're listening (nod, smile, etc.)
  - Provide feedback and ask questions
  - Defer judgment and respond appropriately
  
  ### Clear Messaging
  - Be concise and to the point
  - Choose the right medium for your message
  - Confirm understanding
  - Be mindful of non-verbal cues
  
  ### Regular Check-ins
  - Schedule consistent team meetings
  - Create an open-door policy
  - Encourage feedback and suggestions
  - Address issues promptly
  
  ## Benefits of Effective Communication
  - Improved team collaboration
  - Increased productivity
  - Better problem-solving
  - Stronger relationships
  - Higher employee satisfaction
  
  Start implementing these strategies today to see a positive change in your team's dynamics!`
    }
  ];