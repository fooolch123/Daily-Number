import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Brain, TrendingUp, Lightbulb, Calculator, Clock, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Master</span> the Number Game
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover proven strategies, psychological insights, and smart guessing techniques to improve your success rate in our daily number guessing game and challenge your mind daily.
          </p>
          <Button asChild size="lg">
            <Link to="/">Try Your Strategy Today</Link>
          </Button>
        </div>

        {/* Core Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Guessing Strategies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  The Mathematical Approach
                </CardTitle>
                <Badge variant="secondary" className="w-fit">Logical Strategy</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">50/50 Split Strategy</h4>
                  <p className="text-muted-foreground">
                    Start with 50 as your base guess. This gives you the highest probability of being within 25 numbers of the correct answer, maximizing your chances in a one-guess system.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Golden Ratio Method</h4>
                  <p className="text-muted-foreground">
                    Use the golden ratio principle: guess around 38 or 62 (approximately 38% and 62% of 100). These numbers often feel "more random" and may align with number generation patterns.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Avoid Round Numbers</h4>
                  <p className="text-muted-foreground">
                    Steer clear of obvious choices like 25, 50, 75, or single digits. Most people avoid these when thinking randomly, but computers don't discriminate.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Psychological Insights
                </CardTitle>
                <Badge variant="secondary" className="w-fit">Mind Games</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Human vs. Computer Patterns</h4>
                  <p className="text-muted-foreground">
                    Humans tend to pick numbers in the 30-70 range when asked for "random" numbers. True random number generators don't have this bias - consider extremes too!
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Day of the Week Effect</h4>
                  <p className="text-muted-foreground">
                    Track your intuition patterns. Some players find they're luckier on certain days of the week or when they follow their first instinct versus overthinking.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Emotional State Matters</h4>
                  <p className="text-muted-foreground">
                    Your mood and stress level can affect your intuitive choices. Try playing when you're calm and focused for the best results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advanced Techniques */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Advanced Techniques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3 text-center">Pattern Recognition</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Keep a log of winning numbers over time to identify any potential patterns or streaks in the random generation.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Track high vs low number frequency</li>
                  <li>• Note even vs odd number patterns</li>
                  <li>• Record single vs double digit wins</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3 text-center">Intuition Training</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Develop your number intuition through daily practice and mindfulness techniques for better guessing.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Practice quick decision-making</li>
                  <li>• Trust your first instinct</li>
                  <li>• Meditate before guessing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3 text-center">Timing Strategy</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Choose the optimal time of day to make your guess when your mind is sharpest and most focused.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Morning for clear thinking</li>
                  <li>• Avoid decision fatigue</li>
                  <li>• Set a consistent routine</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Number Psychology */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">The Psychology of Numbers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle>Popular vs. Optimal Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Understanding human number preferences can give you an edge in a truly random system.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">Most Chosen Numbers</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 7 (lucky number bias)</li>
                      <li>• 50 (middle choice)</li>
                      <li>• 25, 75 (quarters)</li>
                      <li>• Round decades</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">Overlooked Numbers</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 1-10 (too obvious)</li>
                      <li>• 90-100 (too high)</li>
                      <li>• Prime numbers</li>
                      <li>• Numbers ending in 0</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle>Cognitive Biases to Avoid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-primary">Gambler's Fallacy</h4>
                    <p className="text-xs text-muted-foreground">
                      Each day's number is independent. Previous results don't influence future outcomes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary">Anchoring Bias</h4>
                    <p className="text-xs text-muted-foreground">
                      Don't let yesterday's number influence today's guess. Stay flexible.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary">Confirmation Bias</h4>
                    <p className="text-xs text-muted-foreground">
                      Don't force patterns where none exist. Random is truly random.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Daily Habits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Build Winning Daily Habits</h2>
          <Card className="bg-gradient-card shadow-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Community Wisdom
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Join online communities to discuss strategies with other daily players</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Share your wins and learn from others' approaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Track collective success rates for different number ranges</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Consistency is Key
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Play at the same time each day for better focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Keep a guessing journal to track your intuition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Celebrate both wins and learning experiences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Daily Tips</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { tip: "Trust your gut instinct", icon: Brain },
              { tip: "Avoid yesterday's number", icon: Clock },
              { tip: "Consider number ranges", icon: Target },
              { tip: "Stay consistent with timing", icon: TrendingUp },
              { tip: "Don't overthink the choice", icon: Lightbulb },
              { tip: "Track your patterns", icon: Calculator },
              { tip: "Play when focused", icon: Target },
              { tip: "Learn from each guess", icon: Trophy }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-border">
                <CardContent className="p-4 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{item.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-card shadow-glow border-primary/20 inline-block">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Apply These Strategies?</h2>
              <p className="text-muted-foreground mb-6">
                Put your new knowledge to the test with today's daily number challenge!
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Target className="h-4 w-4" />
                  Challenge Your Mind Today
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tips;