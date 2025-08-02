import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Heart, Users, Brain, TrendingUp } from 'lucide-react';

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  category, 
  image,
  slug,
  t
}: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  t: (key: string) => string;
}) => (
  <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
    <div className="relative h-48">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-4 left-4">
        <Badge variant="secondary" className="bg-white/90 text-foreground">
          {category}
        </Badge>
      </div>
    </div>
    <CardHeader>
      <CardTitle className="text-xl group-hover:text-primary transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="mb-4 leading-relaxed">
        {excerpt}
      </CardDescription>
      <Button 
        asChild 
        variant="ghost" 
        className="p-0 h-auto text-primary hover:text-primary/80"
      >
        <a href={`/blog/${slug}`} className="flex items-center">
          {t('blog.readMore')}
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

export default function Blog() {
  const { t } = useLanguage();

  // Blog posts data
  const blogPosts = [
    {
      title: "DSC Digital Health Trends: From Precision, Preventive to Predictive Medicine (3Ps)",
      excerpt: "Exploring the evolution of digital health and its impact on precision, preventive, and predictive medicine.",
      date: "August 2, 2024",
      readTime: "8 min",
      category: "Digital Health",
      image: "/images/blog/digital-health-trends.jpg",
      slug: "digital-health-trends-3ps"
    },
    {
      title: "The Science of Happiness: A Practical Guide",
      excerpt: "Discover evidence-based strategies to increase your happiness and well-being in everyday life.",
      date: "May 15, 2023",
      readTime: "5 min",
      category: "Wellness",
      image: "/images/blog/happiness.jpg",
      slug: "science-of-happiness"
    },
    {
      title: "Building Stronger Relationships Through Active Listening",
      excerpt: "Learn how active listening can transform your personal and professional relationships.",
      date: "April 28, 2023",
      readTime: "7 min",
      category: "Relationships",
      image: "/images/blog/relationships.jpg",
      slug: "active-listening-relationships"
    },
    {
      title: "The Power of Mindfulness in a Digital Age",
      excerpt: "How mindfulness practices can help you navigate the challenges of our always-connected world.",
      date: "April 10, 2023",
      readTime: "6 min",
      category: "Mindfulness",
      image: "/images/blog/mindfulness.jpg",
      slug: "mindfulness-digital-age"
    },
    {
      title: "Nutrition for Mental Health: What the Research Says",
      excerpt: "Exploring the connection between diet and mental well-being, and foods that support brain health.",
      date: "March 22, 2023",
      readTime: "8 min",
      category: "Nutrition",
      image: "/images/blog/nutrition.jpg",
      slug: "nutrition-mental-health"
    },
    {
      title: "The Art of Work-Life Balance in 2023",
      excerpt: "Practical tips for maintaining balance and avoiding burnout in today's fast-paced world.",
      date: "March 5, 2023",
      readTime: "6 min",
      category: "Work-Life",
      image: "/images/blog/worklife.jpg",
      slug: "work-life-balance-2023"
    }
  ];

  const categories = [
    { name: 'all', icon: null },
    { name: 'happiness', icon: Heart },
    { name: 'health&tech', icon: Brain },
    { name: 'relationships', icon: Users },
    { name: 'leadership', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-hero" : ""}
              >
                {category.icon && <category.icon className="h-4 w-4 mr-2" />}
                {t(`blog.categories.${category.name}`)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                image={post.image}
                slug={post.slug}
                t={t}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              {t('blog.loadMore')}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};