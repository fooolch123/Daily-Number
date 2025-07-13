import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Calendar, Clock, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const posts = [
    {
      id: 1,
      title: "Why Logic Games Train Your Brain: The Science Behind Daily Challenges",
      excerpt: "Discover the cognitive benefits of daily number guessing games and how they enhance pattern recognition, decision-making skills, and mental agility through consistent practice.",
      content: `
        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-muted-foreground mb-8">Daily logic games like number guessing challenges aren't just fun – they're powerful brain training tools backed by neuroscience research. When you engage with our daily number guesser, you're activating multiple cognitive systems simultaneously.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">The Neuroscience of Number Games</h3>
          <p class="mb-6">Every time you make a guess in our daily number challenge, your brain orchestrates a complex symphony of neural activity. Your prefrontal cortex analyzes patterns and weighs probabilities, your temporal lobe processes numerical relationships, and your limbic system responds to the anticipation and reward of success.</p>
          
          <p class="mb-8">Research from cognitive science laboratories shows that games requiring strategic thinking and pattern recognition create new neural pathways while strengthening existing ones. This neuroplasticity is the foundation of improved cognitive function.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Cognitive Benefits You'll Experience</h3>
          <div class="bg-card/50 p-6 rounded-lg mb-8">
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong class="text-primary">Enhanced Pattern Recognition:</strong> Regular play with our number guessing game improves your ability to identify subtle patterns in seemingly random data, a skill that transfers to problem-solving in daily life.
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong class="text-primary">Improved Decision-Making:</strong> The one-guess-per-day format trains you to make confident decisions under pressure, weighing limited information effectively.
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong class="text-primary">Mental Agility:</strong> Quick number processing enhances overall cognitive flexibility and mathematical intuition.
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong class="text-primary">Focus Training:</strong> Daily challenges build sustained attention and concentration skills essential for academic and professional success.
                </div>
              </li>
            </ul>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">The Power of Constraint</h3>
          <p class="mb-6">What makes our daily number guesser uniquely effective is its elegant constraint: one guess per day. This limitation isn't a restriction – it's a feature that forces your brain to work more efficiently.</p>
          
          <p class="mb-8">When you can't rely on trial and error, you must engage deeper cognitive processes. You analyze probability, consider patterns from previous games, and develop intuitive strategies. Studies in constraint-based problem solving show this approach enhances creative thinking and strategic planning abilities.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Building Mental Habits</h3>
          <p class="mb-6">Consistency is the secret ingredient in brain training. Just as physical exercise builds muscle memory, daily engagement with logic puzzles builds cognitive resilience. Each day you play our number guessing game, you're strengthening neural pathways associated with:</p>
          
          <div class="grid md:grid-cols-2 gap-4 mb-8">
            <div class="bg-card/30 p-4 rounded-lg">
              <h4 class="font-semibold text-primary mb-2">Strategic Thinking</h4>
              <p class="text-sm text-muted-foreground">Developing systematic approaches to problem-solving</p>
            </div>
            <div class="bg-card/30 p-4 rounded-lg">
              <h4 class="font-semibold text-primary mb-2">Intuitive Reasoning</h4>
              <p class="text-sm text-muted-foreground">Trusting and refining your mathematical instincts</p>
            </div>
            <div class="bg-card/30 p-4 rounded-lg">
              <h4 class="font-semibold text-primary mb-2">Emotional Regulation</h4>
              <p class="text-sm text-muted-foreground">Managing the tension between risk and reward</p>
            </div>
            <div class="bg-card/30 p-4 rounded-lg">
              <h4 class="font-semibold text-primary mb-2">Pattern Memory</h4>
              <p class="text-sm text-muted-foreground">Recognizing and learning from numerical sequences</p>
            </div>
          </div>
          
          <div class="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
            <p class="text-center text-lg font-medium">The best part? You only need a few minutes each day to reap these cognitive benefits. Start your brain training journey today with our free daily number guessing game!</p>
          </div>
        </div>
      `,
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "6 min read",
      category: "Brain Training",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&h=600&fit=crop",
      imageAlt: "Person holding illuminated light bulb representing brain power and ideas"
    },
    {
      id: 2,
      title: "The Psychology of Daily Challenges: Why One Try Per Day Works",
      excerpt: "Explore the psychological principles behind daily games and why limiting attempts to once per day creates more engaging and rewarding experiences for players.",
      content: `
        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-muted-foreground mb-8">Have you ever wondered why daily challenges feel so compelling? The psychology behind "one try per day" games taps into fundamental aspects of human motivation, creating experiences that are both engaging and psychologically beneficial.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">The Scarcity Principle</h3>
          <p class="mb-6">When something is limited, we naturally value it more. This psychological principle, known as scarcity bias, is why our daily number guessing game feels more significant than unlimited-play alternatives.</p>
          
          <div class="bg-card/50 p-6 rounded-lg mb-8">
            <p class="mb-4">By restricting gameplay to once per day, we create a sense of importance around each guess. Your single attempt becomes precious, engaging deeper cognitive processes than rapid-fire gaming ever could.</p>
            <p>This scarcity doesn't just make the game more engaging – it makes success more meaningful and failure more instructive.</p>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Anticipation and Reward Cycles</h3>
          <p class="mb-6">Daily games create perfect anticipation cycles that align with our natural psychological rhythms. The 24-hour wait between attempts builds excitement and anticipation, making tomorrow's challenge feel like an event rather than just another game.</p>
          
          <p class="mb-8">This anticipation triggers dopamine release even before playing. Your brain begins processing the upcoming challenge subconsciously, making the eventual gameplay more satisfying and memorable.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">The Zeigarnik Effect</h3>
          <p class="mb-6">Psychologist Bluma Zeigarnik discovered that people remember interrupted or incomplete tasks better than completed ones. When you make your daily guess, your brain continues processing the challenge throughout the day.</p>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-card/30 p-6 rounded-lg">
              <h4 class="font-semibold text-primary mb-3">Mental Rehearsal</h4>
              <p class="text-sm text-muted-foreground">Your subconscious continues analyzing patterns and probabilities</p>
            </div>
            <div class="bg-card/30 p-6 rounded-lg">
              <h4 class="font-semibold text-primary mb-3">Strategy Development</h4>
              <p class="text-sm text-muted-foreground">You naturally develop more sophisticated approaches over time</p>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Habit Formation Science</h3>
          <p class="mb-6">Daily challenges are perfectly designed for building positive habits. The consistency of once-per-day play creates routine, while the variable reward (sometimes you win, sometimes you don't) maintains engagement through intermittent reinforcement.</p>
          
          <p class="mb-8">This is the most powerful type of behavior conditioning – the same mechanism that makes slot machines addictive, but applied to beneficial cognitive training instead.</p>
          
          <div class="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
            <h4 class="font-semibold mb-3">The Habit Loop in Action:</h4>
            <ol class="space-y-2 text-sm">
              <li><strong>Cue:</strong> Daily notification or routine time</li>
              <li><strong>Routine:</strong> Making your number guess</li>
              <li><strong>Reward:</strong> Satisfaction of completion + chance of winning</li>
              <li><strong>Craving:</strong> Anticipation for tomorrow's challenge</li>
            </ol>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Social Psychology Benefits</h3>
          <p class="mb-6">Shared daily challenges create implicit communities. When everyone faces the same puzzle on the same day, it creates common ground for discussion and social bonding.</p>
          
          <p class="mb-8">This social aspect amplifies the psychological rewards of participation. You're not just playing a game – you're joining a daily ritual shared by others who appreciate the challenge of logic and intuition.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Mindfulness and Present-Moment Awareness</h3>
          <p class="mb-6">The constraint of one daily guess naturally creates a mindful experience. You can't rush through multiple attempts; instead, you must be fully present for your single opportunity.</p>
          
          <p class="mb-8">This mindful engagement reduces anxiety and promotes mental clarity – benefits that extend beyond the game into daily life.</p>
          
          <div class="bg-card/50 p-6 rounded-lg text-center">
            <p class="text-lg font-medium">Understanding these psychological principles helps explain why daily number guessing games are so compelling and beneficial for mental health and cognitive development.</p>
          </div>
        </div>
      `,
      author: "Prof. Michael Torres",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1200&h=600&fit=crop",
      imageAlt: "Starry night sky representing the psychology of daily challenges and mental patterns"
    },
    {
      id: 3,
      title: "Minimalist Games, Maximum Focus: The Beauty of Simple Challenges",
      excerpt: "Learn how minimalist game design creates deeper engagement and better cognitive outcomes compared to complex, feature-heavy alternatives in the digital age.",
      content: `
        <div class="prose prose-invert max-w-none">
          <p class="text-lg text-muted-foreground mb-8">In our hyperconnected world filled with flashy graphics and complex mechanics, there's profound beauty in simplicity. Minimalist games like our daily number guesser prove that the most powerful experiences often come from the most elegant designs.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Less is More in Game Design</h3>
          <p class="mb-6">While modern games compete with overwhelming features and visual effects, minimalist design focuses on the essential: the pure challenge. Our number guesser strips away unnecessary complexity to reveal the core essence of strategic thinking.</p>
          
          <div class="bg-card/50 p-6 rounded-lg mb-8">
            <p class="font-medium mb-2">The Power of Subtraction</p>
            <p class="text-sm text-muted-foreground">By removing distractions, we amplify what matters most: your intuition, logic, and decision-making process. Every element serves the core experience.</p>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Cognitive Load Theory</h3>
          <p class="mb-6">Simple interfaces reduce cognitive load, allowing players to focus entirely on the core challenge. When you're not processing flashy animations or complex menus, your brain can dedicate full attention to making the perfect guess.</p>
          
          <p class="mb-8">Research in cognitive psychology shows that reduced visual complexity leads to better decision-making and increased flow states – that magical zone where challenge meets skill.</p>
          
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-card/30 p-6 rounded-lg text-center">
              <h4 class="font-semibold text-primary mb-2">Clear Focus</h4>
              <p class="text-sm text-muted-foreground">No distractions from the core challenge</p>
            </div>
            <div class="bg-card/30 p-6 rounded-lg text-center">
              <h4 class="font-semibold text-primary mb-2">Instant Understanding</h4>
              <p class="text-sm text-muted-foreground">Rules are immediately clear to everyone</p>
            </div>
            <div class="bg-card/30 p-6 rounded-lg text-center">
              <h4 class="font-semibold text-primary mb-2">Deep Engagement</h4>
              <p class="text-sm text-muted-foreground">Simple mechanics create complex strategies</p>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">The Power of Single-Purpose Design</h3>
          <p class="mb-6">Unlike multi-feature games that scatter attention across various mechanics, single-purpose games create flow states more easily. When everything serves one core mechanic, players enter a zone of focused concentration that's both enjoyable and beneficial.</p>
          
          <p class="mb-8">Our daily number guesser exemplifies this principle. One goal, one input, one outcome – but infinite strategic depth.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Digital Minimalism Benefits</h3>
          
          <div class="space-y-6 mb-8">
            <div class="border-l-4 border-primary pl-6">
              <h4 class="font-semibold mb-2">Reduced Decision Fatigue</h4>
              <p class="text-muted-foreground">Fewer choices means less mental exhaustion. You focus on the one decision that matters: which number to guess.</p>
            </div>
            <div class="border-l-4 border-primary pl-6">
              <h4 class="font-semibold mb-2">Clearer Success Metrics</h4>
              <p class="text-muted-foreground">Simple win/lose conditions provide immediate, unambiguous feedback about your performance.</p>
            </div>
            <div class="border-l-4 border-primary pl-6">
              <h4 class="font-semibold mb-2">Universal Accessibility</h4>
              <p class="text-muted-foreground">Anyone can understand and play immediately, regardless of gaming experience or technical knowledge.</p>
            </div>
            <div class="border-l-4 border-primary pl-6">
              <h4 class="font-semibold mb-2">Timeless Appeal</h4>
              <p class="text-muted-foreground">Simple games don't become outdated. The core challenge remains engaging across generations.</p>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">The Zen of Number Guessing</h3>
          <p class="mb-6">There's something meditative about the simplicity of choosing a number between 1 and 100. No complex strategies to memorize, no lengthy tutorials to complete – just you, your intuition, and the elegant challenge.</p>
          
          <div class="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
            <p class="text-center italic">"Simplicity is the ultimate sophistication." - Leonardo da Vinci</p>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">Quality Over Quantity</h3>
          <p class="mb-6">While complex games might offer hundreds of hours of content, minimalist games offer depth through repeated engagement. Each daily guess becomes an opportunity for mindfulness and self-reflection.</p>
          
          <p class="mb-8">The beauty lies not in consuming vast amounts of content, but in finding deeper meaning within constrained parameters.</p>
          
          <h3 class="text-2xl font-bold mb-4 text-primary">The Paradox of Choice</h3>
          <p class="mb-6">Psychologist Barry Schwartz demonstrated that too many choices can lead to anxiety and decision paralysis. By limiting the choice to a single number, we eliminate this paradox and create space for confident decision-making.</p>
          
          <div class="bg-card/50 p-6 rounded-lg mb-8">
            <h4 class="font-semibold mb-3">The Sweet Spot of Challenge</h4>
            <p class="text-sm text-muted-foreground mb-3">100 possible numbers provides the perfect balance:</p>
            <ul class="text-sm text-muted-foreground space-y-1">
              <li>• Large enough to feel challenging</li>
              <li>• Small enough to feel achievable</li>
              <li>• Simple enough to understand instantly</li>
              <li>• Complex enough for strategic thinking</li>
            </ul>
          </div>
          
          <div class="text-center bg-gradient-card p-8 rounded-lg">
            <p class="text-lg font-medium mb-4">In our hyperconnected world, minimalist games provide necessary mental space for focus and reflection.</p>
            <p class="text-muted-foreground">Sometimes, the simplest challenges offer the greatest rewards.</p>
          </div>
        </div>
      `,
      author: "Emma Rodriguez",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop",
      imageAlt: "Minimalist mountain landscape representing focus and simple design principles"
    }
  ];

  const post = posts.find(p => p.id === parseInt(id || ""));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <article className="space-y-8">
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src={post.image} 
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex justify-between items-center">
            <p className="text-lg text-muted-foreground max-w-3xl">
              {post.excerpt}
            </p>
            <Button variant="outline" onClick={sharePost} className="gap-2">
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Article Content */}
          <Card className="bg-gradient-card shadow-card border-border">
            <CardContent className="p-8">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-card shadow-glow border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Put This into Practice?</h3>
              <p className="text-muted-foreground mb-6">
                Test your cognitive skills with today's daily number guessing challenge!
              </p>
              <Button asChild size="lg">
                <Link to="/">Play Today's Game</Link>
              </Button>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;