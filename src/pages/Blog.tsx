import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Why Logic Games Train Your Brain: The Science Behind Daily Challenges",
      excerpt: "Discover the cognitive benefits of daily number guessing games and how they enhance pattern recognition, decision-making skills, and mental agility through consistent practice.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "6 min read",
      category: "Brain Training",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
      imageAlt: "Person holding illuminated light bulb representing brain power and ideas"
    },
    {
      id: 2,
      title: "The Psychology of Daily Challenges: Why One Try Per Day Works",
      excerpt: "Explore the psychological principles behind daily games and why limiting attempts to once per day creates more engaging and rewarding experiences for players.",
      author: "Prof. Michael Torres",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      imageAlt: "Starry night sky representing the psychology of daily challenges and mental patterns"
    },
    {
      id: 3,
      title: "Minimalist Games, Maximum Focus: The Beauty of Simple Challenges",
      excerpt: "Learn how minimalist game design creates deeper engagement and better cognitive outcomes compared to complex, feature-heavy alternatives in the digital age.",
      author: "Emma Rodriguez",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
      imageAlt: "Minimalist mountain landscape representing focus and simple design principles"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="bg-gradient-primary bg-clip-text text-transparent">Number Guesser</span> Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights, strategies, and science behind daily number challenges, brain training games, and the psychology of minimalist gaming experiences.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-4">Featured Article</Badge>
          <Card className="bg-gradient-card shadow-glow border-primary/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{posts[0].category}</Badge>
                </div>
                <h2 className="text-2xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link to={`/blog/${posts[0].id}`}>
                    Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-80 md:h-full">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => {
              return (
                <Card key={post.id} className="bg-gradient-card shadow-card border-border overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="outline" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Topics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Brain Training", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", count: "12 articles" },
              { name: "Psychology", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop", count: "8 articles" },
              { name: "Game Design", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", count: "6 articles" },
              { name: "Daily Habits", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", count: "10 articles" }
            ].map((category) => (
              <Card key={category.name} className="bg-gradient-card shadow-card border-border cursor-pointer hover:shadow-glow transition-all duration-200 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-card shadow-glow border-primary/20 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get weekly insights about brain training, game psychology, and strategies delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Put Theory into Practice?</h2>
          <p className="text-muted-foreground mb-6">
            Apply what you've learned and test your daily number guessing skills!
          </p>
          <Button asChild size="lg">
            <Link to="/">Play Today's Challenge</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;