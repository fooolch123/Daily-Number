import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Target, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GameState {
  hasPlayedToday: boolean;
  lastPlayDate: string;
  guessedCorrectly: boolean;
  targetNumber: number;
  attempts: Array<{ date: string; guess: number; target: number; correct: boolean }>;
}

const GameCard = () => {
  const [guess, setGuess] = useState("");
  const [gameState, setGameState] = useState<GameState>({
    hasPlayedToday: false,
    lastPlayDate: "",
    guessedCorrectly: false,
    targetNumber: Math.floor(Math.random() * 100) + 1,
    attempts: []
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load game state from localStorage
    const saved = localStorage.getItem("numberGuesserGame");
    if (saved) {
      const parsed = JSON.parse(saved);
      const today = new Date().toDateString();
      
      // Check if player has already played today
      if (parsed.lastPlayDate === today) {
        setGameState(prev => ({ ...prev, ...parsed, hasPlayedToday: true }));
      } else {
        // New day, reset the game
        const newTarget = Math.floor(Math.random() * 100) + 1;
        setGameState(prev => ({ 
          ...prev, 
          targetNumber: newTarget, 
          hasPlayedToday: false, 
          guessedCorrectly: false 
        }));
      }
    }
  }, []);

  const saveGameState = (newState: Partial<GameState>) => {
    const updatedState = { ...gameState, ...newState };
    setGameState(updatedState);
    localStorage.setItem("numberGuesserGame", JSON.stringify(updatedState));
  };

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      toast({
        title: "Invalid guess",
        description: "Please enter a number between 1 and 100",
        variant: "destructive"
      });
      return;
    }

    const today = new Date().toDateString();
    const correct = guessNumber === gameState.targetNumber;
    
    const newAttempt = {
      date: today,
      guess: guessNumber,
      target: gameState.targetNumber,
      correct
    };

    const newAttempts = [...gameState.attempts, newAttempt];

    saveGameState({
      hasPlayedToday: true,
      lastPlayDate: today,
      guessedCorrectly: correct,
      attempts: newAttempts
    });

    if (correct) {
      toast({
        title: "🎉 Congratulations!",
        description: `You guessed it! The number was ${gameState.targetNumber}. Download your certificate!`,
      });
    } else {
      toast({
        title: "Not quite right",
        description: `The number was ${gameState.targetNumber}. Come back tomorrow for a new challenge!`,
      });
    }

    setGuess("");
  };

  const generateCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Background
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#0f172a');
    gradient.addColorStop(1, '#1e293b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    // Border
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 760, 560);

    // Title
    ctx.fillStyle = '#06b6d4';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Achievement', 400, 120);

    // Subtitle
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '24px Arial';
    ctx.fillText('Daily Number Guesser Challenge', 400, 180);

    // Main text
    ctx.font = '32px Arial';
    ctx.fillText('This certifies that you have', 400, 280);
    ctx.fillText('successfully guessed the mystery number', 400, 320);
    
    // Number
    ctx.fillStyle = '#06b6d4';
    ctx.font = 'bold 48px Arial';
    ctx.fillText(gameState.targetNumber.toString(), 400, 380);

    // Date
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '20px Arial';
    ctx.fillText(`on ${new Date().toLocaleDateString()}`, 400, 430);

    // Footer
    ctx.font = '16px Arial';
    ctx.fillText('Number Guesser - Daily Challenge Champion', 400, 520);

    // Download
    const link = document.createElement('a');
    link.download = `number-guesser-certificate-${new Date().toISOString().split('T')[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();

    toast({
      title: "Certificate downloaded!",
      description: "Your achievement certificate has been saved to your downloads.",
    });
  };

  const timeUntilNextGame = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Main Game Card */}
      <Card className="bg-gradient-card shadow-card border-border">
        <CardHeader className="text-center pb-2">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-primary mr-2" />
            <Badge variant="secondary" className="text-sm">
              Daily Number Challenge
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold mb-2">
            Guess the mystery number between <span className="text-primary">1-100</span> and earn your digital certificate!
          </CardTitle>
          <p className="text-muted-foreground">
            Get one guess per day to find the mystery number and receive your badge!
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {!gameState.hasPlayedToday ? (
            <div className="space-y-4">
              <div className="flex gap-4 max-w-md mx-auto">
                <Input
                  type="number"
                  placeholder="Enter your guess (1-100)"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  min="1"
                  max="100"
                  className="text-center text-lg"
                />
                <Button onClick={handleGuess} size="lg" className="px-8">
                  Guess!
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Choose wisely - you only get one guess per day!
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              {gameState.guessedCorrectly ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Trophy className="h-8 w-8 text-success" />
                    <h3 className="text-2xl font-bold text-success">You've already played today!</h3>
                  </div>
                  <p className="text-lg">
                    🎉 Congratulations! You correctly guessed <span className="font-bold text-primary">{gameState.targetNumber}</span>
                  </p>
                  <Button onClick={generateCertificate} variant="success" size="lg" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Certificate
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">You've already played today!</h3>
                  <p className="text-lg">
                    The number was <span className="font-bold text-primary">{gameState.targetNumber}</span>. Better luck tomorrow!
                  </p>
                </div>
              )}
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Come back in {timeUntilNextGame()} for a new challenge!</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card shadow-card border-border">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">One Chance Daily</h3>
            <p className="text-sm text-muted-foreground">
              Get one guess per day to find the mystery number between 1-100 and increase your chances with a smart strategy.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card border-border">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Win Rewards</h3>
            <p className="text-sm text-muted-foreground">
              Earn personalized certificates for successful guesses. Download and share your digital achievement certificates!
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card border-border">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Digital Certificates</h3>
            <p className="text-sm text-muted-foreground">
              Download instant digitally-signed certificates with your name, guess, and achievement details for your portfolio.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Attempts */}
      {gameState.attempts.length > 0 && (
        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Recent Attempts
            </CardTitle>
            <p className="text-sm text-muted-foreground">Your guessing history and progress</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {gameState.attempts.slice(-5).reverse().map((attempt, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{attempt.date}</span>
                    <span className="font-medium">Guessed: {attempt.guess}</span>
                    <span className="text-sm text-muted-foreground">Target: {attempt.target}</span>
                  </div>
                  <Badge variant={attempt.correct ? "default" : "secondary"}>
                    {attempt.correct ? "Won!" : "Missed"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GameCard;