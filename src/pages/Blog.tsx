import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Heart, Users, Brain, TrendingUp } from 'lucide-react';

const BlogCard = ({ title, excerpt, date, readTime, category, image }: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}) => (
  <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden">
    <div className="relative h-48 bg-gradient-warm">
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
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>{readTime}</span>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="mb-4 leading-relaxed">
        {excerpt}
      </CardDescription>
      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
        Read More
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
);

export const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: "5 Daily Practices for Lasting Happiness",
      excerpt: "Discover simple yet powerful practices that can transform your daily experience and build lasting joy from within.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Happiness",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Balancing Technology and Mental Health",
      excerpt: "Learn how to create healthy boundaries with technology while leveraging digital tools for better mental wellness.",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Health & Tech",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Building Deeper Intimacy in Relationships",
      excerpt: "Explore proven strategies for enhancing emotional and physical intimacy with your partner through mindful communication.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Relationships",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Leading with Compassion: Organizational Growth",
      excerpt: "How compassionate leadership drives sustainable growth and creates thriving workplace cultures.",
      date: "Dec 8, 2024",
      readTime: "8 min read",
      category: "Leadership",
      image: "/api/placeholder/400/200"
    },
    {
      title: "The Science of Kindness and Well-being",
      excerpt: "Discover the research-backed benefits of practicing kindness and how it transforms both giver and receiver.",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      category: "Wellness",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Digital Detox: Reclaiming Your Attention",
      excerpt: "Practical strategies for reducing digital overwhelm and creating space for what truly matters in your life.",
      date: "Dec 1, 2024",
      readTime: "6 min read",
      category: "Health & Tech",
      image: "/api/placeholder/400/200"
    }
  ];

  const categories = [
    { name: "All", icon: null },
    { name: "Happiness", icon: Heart },
    { name: "Health & Tech", icon: Brain },
    { name: "Relationships", icon: Users },
    { name: "Leadership", icon: TrendingUp },
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
                {category.name}
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
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Load More Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};