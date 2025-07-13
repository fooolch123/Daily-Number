import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Clock, Trophy, Download, Users, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How the <span className="bg-gradient-primary bg-clip-text text-transparent">Daily Number Guesser</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our simple yet engaging daily number guessing game challenges your intuition and rewards your success with beautiful digital certificates. Here's everything you need to know.
          </p>
          <Button asChild size="lg">
            <Link to="/">Start Playing Now</Link>
          </Button>
        </div>

        {/* How It Works Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card border-border relative">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Make Your Guess</h3>
                <p className="text-muted-foreground">
                  Enter a number between 1 and 100. Think carefully - you only get one chance per day to guess the mystery number correctly!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border relative">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Wait for Tomorrow</h3>
                <p className="text-muted-foreground">
                  Whether you win or lose, you'll need to wait until the next day for a fresh challenge. This keeps the game exciting and builds anticipation!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border relative">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Earn Your Certificate</h3>
                <p className="text-muted-foreground">
                  Guess correctly and instantly download a beautiful, personalized digital certificate to celebrate your achievement and share with friends!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Game Rules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Game Rules & Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  The Challenge
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Every day, a new mystery number between 1-100 is randomly generated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You get exactly one guess per day - choose wisely!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No hints or clues are provided - it's pure intuition and strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>The game resets at midnight for a fresh daily challenge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Win Rewards
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Guess correctly to earn a professional digital certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Certificates include your winning number and date of achievement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>High-resolution PNG format perfect for sharing or printing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Track your winning streak and attempt history</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Play Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Play Daily Number Guesser?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Train Your Brain</h3>
                <p className="text-sm text-muted-foreground">
                  Daily logic games help improve pattern recognition, decision-making, and intuitive thinking skills.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Join the Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with thousands of daily players who enjoy the challenge of one-try-per-day number guessing games.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Celebrate Success</h3>
                <p className="text-sm text-muted-foreground">
                  Earn beautiful certificates for your achievements and build a collection of your daily challenge victories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What happens if I guess wrong?</h3>
                <p className="text-muted-foreground">
                  Don't worry! The correct number will be revealed, and you can try again tomorrow with a completely new mystery number. Each day is a fresh start!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I play multiple times per day?</h3>
                <p className="text-muted-foreground">
                  No, the game is designed to be played once per day. This creates anticipation and makes each guess more meaningful. The game resets at midnight for the next challenge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How are the numbers generated?</h3>
                <p className="text-muted-foreground">
                  Each day's mystery number is randomly generated between 1 and 100 using a secure random number generator. Every number has an equal chance of being selected.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is the game really free?</h3>
                <p className="text-muted-foreground">
                  Yes! The daily number guessing game is completely free to play. You can earn and download certificates at no cost. We're supported by ads to keep the game free for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-card shadow-glow border-primary/20 inline-block">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Test Your Intuition?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of players in the daily number challenge. Will today be your lucky day?
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Target className="h-4 w-4" />
                  Play Now - Free!
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;