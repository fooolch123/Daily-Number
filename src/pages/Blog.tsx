import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Target, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Why Logic Games Train Your Brain: The Science Behind Daily Challenges",
      excerpt: "Discover the cognitive benefits of daily number guessing games and how they enhance pattern recognition, decision-making skills, and mental agility through consistent practice.",
      content: `
        <h3>The Neuroscience of Number Games</h3>
        <p>Daily logic games like our number guesser activate multiple areas of the brain simultaneously. When you make a guess, you're engaging your prefrontal cortex for decision-making, your temporal lobe for pattern recognition, and your limbic system for the emotional reward of success.</p>
        
        <h3>Cognitive Benefits You'll Experience</h3>
        <ul>
          <li><strong>Enhanced Pattern Recognition:</strong> Regular play improves your ability to identify subtle patterns in randomness</li>
          <li><strong>Improved Decision-Making:</strong> The one-guess-per-day format trains you to make confident decisions under pressure</li>
          <li><strong>Mental Agility:</strong> Quick number processing enhances overall cognitive flexibility</li>
          <li><strong>Focus Training:</strong> Daily challenges build sustained attention and concentration skills</li>
        </ul>
        
        <h3>The Power of Constraint</h3>
        <p>What makes our daily number guesser special is its constraint: one guess per day. This limitation forces your brain to work more efficiently, weighing options carefully rather than relying on trial and error. Studies show that constraint-based problem solving enhances creative thinking and strategic planning.</p>
        
        <h3>Building Mental Habits</h3>
        <p>Consistency is key to brain training. By playing daily, you're creating neural pathways that strengthen over time. Just like physical exercise builds muscle memory, daily number challenges build cognitive resilience and intuitive thinking skills.</p>
        
        <p>The best part? You only need a few minutes each day to reap these benefits. Start your brain training journey today with our free daily number guessing game!</p>
      `,
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "6 min read",
      category: "Brain Training",
      image: Brain
    },
    {
      id: 2,
      title: "The Psychology of Daily Challenges: Why One Try Per Day Works",
      excerpt: "Explore the psychological principles behind daily games and why limiting attempts to once per day creates more engaging and rewarding experiences for players.",
      content: `
        <h3>The Scarcity Principle</h3>
        <p>When something is limited, we value it more. By restricting gameplay to once per day, we tap into the scarcity principle, making each guess feel more significant and engaging. This psychological phenomenon is why daily challenges are so addictive and satisfying.</p>
        
        <h3>Anticipation and Reward Cycles</h3>
        <p>Daily games create perfect anticipation cycles. The 24-hour wait between attempts builds excitement and anticipation, making the next day's challenge feel like an event rather than just another game. This anticipation triggers dopamine release even before playing.</p>
        
        <h3>The Zeigarnik Effect</h3>
        <p>Psychologist Bluma Zeigarnik discovered that people remember interrupted or incomplete tasks better than completed ones. When you make your daily guess, your brain continues processing the challenge subconsciously, keeping you mentally engaged throughout the day.</p>
        
        <h3>Habit Formation Science</h3>
        <p>Daily challenges are perfect for building positive habits. The consistency of once-per-day play creates routine, while the variable reward (sometimes you win, sometimes you don't) maintains engagement through intermittent reinforcement - the most powerful type of behavior conditioning.</p>
        
        <h3>Social Psychology Benefits</h3>
        <p>Shared daily challenges create communities. When everyone faces the same puzzle on the same day, it creates common ground for discussion and social bonding. This social aspect amplifies the psychological rewards of participation.</p>
        
        <p>Understanding these psychological principles helps explain why daily number guessing games are so compelling and beneficial for mental health and cognitive development.</p>
      `,
      author: "Prof. Michael Torres",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Psychology",
      image: Clock
    },
    {
      id: 3,
      title: "Minimalist Games, Maximum Focus: The Beauty of Simple Challenges",
      excerpt: "Learn how minimalist game design creates deeper engagement and better cognitive outcomes compared to complex, feature-heavy alternatives in the digital age.",
      content: `
        <h3>Less is More in Game Design</h3>
        <p>In an age of overwhelming digital experiences, minimalist games offer a refreshing alternative. Our number guesser strips away unnecessary complexity to focus on the pure essence of challenge: intuition, strategy, and chance.</p>
        
        <h3>Cognitive Load Theory</h3>
        <p>Simple interfaces reduce cognitive load, allowing players to focus entirely on the core challenge. When you're not distracted by flashy graphics or complex mechanics, your brain can dedicate full attention to the task at hand - making better guesses.</p>
        
        <h3>The Power of Single-Purpose Design</h3>
        <p>Unlike multi-feature games that scatter attention, single-purpose games create flow states more easily. When everything serves the core mechanic, players enter a zone of focused concentration that's both enjoyable and beneficial.</p>
        
        <h3>Digital Minimalism Benefits</h3>
        <ul>
          <li><strong>Reduced Decision Fatigue:</strong> Fewer choices means less mental exhaustion</li>
          <li><strong>Clearer Success Metrics:</strong> Simple win/lose conditions provide immediate feedback</li>
          <li><strong>Universal Accessibility:</strong> Anyone can understand and play immediately</li>
          <li><strong>Timeless Appeal:</strong> Simple games don't become outdated</li>
        </ul>
        
        <h3>The Zen of Number Guessing</h3>
        <p>There's something meditative about the simplicity of choosing a number between 1 and 100. No complex strategies to memorize, no lengthy tutorials to complete - just you, your intuition, and the challenge.</p>
        
        <h3>Quality Over Quantity</h3>
        <p>While complex games might offer hundreds of hours of content, minimalist games offer depth through repeated engagement. Each daily guess becomes an opportunity for mindfulness and self-reflection.</p>
        
        <p>In our hyperconnected world, minimalist games provide necessary mental space for focus and reflection. Sometimes, the simplest challenges offer the greatest rewards.</p>
      `,
      author: "Emma Rodriguez",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Design",
      image: Target
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
          <Card className="bg-gradient-card shadow-glow border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="h-8 w-8 text-primary" />
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
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => {
              const IconComponent = post.image;
              return (
                <Card key={post.id} className="bg-gradient-card shadow-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
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
              { name: "Brain Training", icon: Brain, count: "12 articles" },
              { name: "Psychology", icon: Clock, count: "8 articles" },
              { name: "Game Design", icon: Target, count: "6 articles" },
              { name: "Daily Habits", icon: Calendar, count: "10 articles" }
            ].map((category) => (
              <Card key={category.name} className="bg-gradient-card shadow-card border-border cursor-pointer hover:shadow-glow transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
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