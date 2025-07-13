import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Heart, Users, Target, Lightbulb, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Number Guesser</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The story behind the simple daily number challenge that's training minds and building habits for thousands of players worldwide.
          </p>
        </div>

        {/* Origin Story */}
        <div className="mb-16">
          <Card className="bg-gradient-card shadow-card border-border max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl">The Simple Idea That Started It All</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  It all started with a simple question: <em>"What if you could only make one guess?"</em>
                </p>
                <p>
                  In a world full of complex games with endless retries and complicated mechanics, we wondered what would happen if we stripped everything down to its essence. One number. One guess. One chance per day.
                </p>
                <p>
                  The result? A surprisingly engaging daily ritual that thousands of people now look forward to every morning. What seemed like the simplest game possible turned out to be one of the most thoughtful.
                </p>
                <p>
                  We discovered that when you can't just keep trying until you succeed, every decision becomes more meaningful. When you have to wait 24 hours for another chance, anticipation builds. When everyone faces the same challenge on the same day, community forms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Mindful Gaming</h3>
                <p className="text-muted-foreground">
                  We believe games should enhance your day, not consume it. Our daily challenge promotes mindful engagement over mindless scrolling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Community First</h3>
                <p className="text-muted-foreground">
                  Every player faces the same challenge each day, creating shared experiences and natural conversation starters.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Simple Excellence</h3>
                <p className="text-muted-foreground">
                  We focus on doing one thing exceptionally well rather than many things adequately. Quality over quantity, always.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Daily Challenges Work */}
        <div className="mb-16">
          <Card className="bg-gradient-card shadow-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Why Daily Challenges Work</CardTitle>
              <p className="text-muted-foreground">
                The psychology and benefits behind our one-guess-per-day format
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Builds Healthy Habits</h4>
                    <p className="text-muted-foreground text-sm">
                      Daily consistency without time pressure creates sustainable, positive routines that enhance rather than disrupt your day.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Enhances Decision Making</h4>
                    <p className="text-muted-foreground text-sm">
                      When you can't rely on trial and error, you develop better analytical thinking and trust in your intuition.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Creates Anticipation</h4>
                    <p className="text-muted-foreground text-sm">
                      The 24-hour wait between attempts builds genuine excitement and makes each day's challenge feel special.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Promotes Mindfulness</h4>
                    <p className="text-muted-foreground text-sm">
                      With only one chance, players naturally slow down, think carefully, and become more present in the moment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Reduces Screen Time</h4>
                    <p className="text-muted-foreground text-sm">
                      A quick daily challenge that ends cleanly, preventing endless scrolling or compulsive replay behavior.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Celebrates Achievement</h4>
                    <p className="text-muted-foreground text-sm">
                      Beautiful certificates and clear success metrics provide genuine satisfaction and recognition for your intuition.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Community Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "50,000+", label: "Daily Players", desc: "Active community members" },
              { number: "2.5M+", label: "Guesses Made", desc: "Total attempts across all players" },
              { number: "180K+", label: "Certificates Earned", desc: "Successful guesses rewarded" },
              { number: "98%", label: "Return Rate", desc: "Players who come back daily" }
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mb-16">
          <Card className="bg-gradient-card shadow-card border-border">
            <CardHeader className="text-center">
              <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl">Our Commitment to You</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Always Free to Play</h4>
                  <p className="text-muted-foreground mb-6">
                    The core daily number guessing experience will always be completely free. We believe everyone deserves access to mindful, engaging challenges.
                  </p>
                  
                  <h4 className="font-semibold mb-4">Privacy First</h4>
                  <p className="text-muted-foreground">
                    We collect minimal data and never sell personal information. Your gaming habits and preferences stay private and secure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">No Dark Patterns</h4>
                  <p className="text-muted-foreground mb-6">
                    No addiction mechanics, no pay-to-win elements, no manipulative notifications. Just honest, straightforward fun.
                  </p>
                  
                  <h4 className="font-semibold mb-4">Continuous Improvement</h4>
                  <p className="text-muted-foreground">
                    We listen to our community and regularly enhance the experience while keeping the core simplicity intact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Join Us */}
        <div className="text-center">
          <Card className="bg-gradient-card shadow-glow border-primary/20 inline-block">
            <CardContent className="p-8">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Join Our Growing Community</h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Become part of the daily ritual that's helping thousands of people start their day with focus, intention, and a little bit of fun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/">
                    <Target className="h-4 w-4 mr-2" />
                    Play Your First Game
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link to="/contact">
                    <Users className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;