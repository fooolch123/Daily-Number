import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DiplomaGeneratorProps {
  targetNumber: number;
  onGenerate?: () => void;
}

const DiplomaGenerator = ({ targetNumber, onGenerate }: DiplomaGeneratorProps) => {
  const [playerName, setPlayerName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const generateDiploma = () => {
    if (!playerName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name to generate the certificate",
        variant: "destructive"
      });
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Background - elegant cream color
    const bgGradient = ctx.createLinearGradient(0, 0, 1200, 900);
    bgGradient.addColorStop(0, '#faf7f2');
    bgGradient.addColorStop(1, '#f3f0e8');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1200, 900);

    // Decorative border
    ctx.strokeStyle = '#8b5a2b';
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, 1120, 820);
    
    // Inner decorative border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 60, 1080, 780);

    // Corner decorative elements
    const drawCornerDecoration = (x: number, y: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = '#8b5a2b';
      ctx.lineWidth = 2;
      
      // Corner flourish
      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI/2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI/2);
      ctx.stroke();
      
      ctx.restore();
    };

    drawCornerDecoration(100, 100);
    drawCornerDecoration(1100, 100);
    drawCornerDecoration(100, 800);
    drawCornerDecoration(1100, 800);

    // University seal (decorative circle)
    ctx.save();
    ctx.translate(600, 200);
    
    // Outer seal circle
    ctx.strokeStyle = '#8b5a2b';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Inner seal details
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, 2 * Math.PI);
    ctx.fill();
    
    // Seal text
    ctx.fillStyle = '#8b5a2b';
    ctx.font = 'bold 16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('NUMBER', 0, -10);
    ctx.fillText('GUESSER', 0, 10);
    ctx.font = '12px serif';
    ctx.fillText('ACADEMY', 0, 30);
    
    ctx.restore();

    // Main title
    ctx.fillStyle = '#8b5a2b';
    ctx.font = 'bold 64px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Excellence', 600, 340);

    // Subtitle
    ctx.font = '32px serif';
    ctx.fillStyle = '#2c1810';
    ctx.fillText('Daily Number Guessing Challenge', 600, 390);

    // Recipient line
    ctx.font = '28px serif';
    ctx.fillText('This is to certify that', 600, 450);

    // Player name (larger, elegant)
    ctx.font = 'italic bold 48px serif';
    ctx.fillStyle = '#8b5a2b';
    ctx.fillText(playerName.trim(), 600, 520);

    // Achievement text
    ctx.font = '28px serif';
    ctx.fillStyle = '#2c1810';
    ctx.fillText('has successfully demonstrated exceptional intuition', 600, 580);
    ctx.fillText('and mathematical reasoning by correctly guessing', 600, 620);

    // The number (highlighted)
    ctx.font = 'bold 56px serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText(`THE NUMBER ${targetNumber}`, 600, 680);

    // Date and location
    ctx.font = '24px serif';
    ctx.fillStyle = '#2c1810';
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    ctx.fillText(`on this ${currentDate}`, 600, 730);

    // Signature line
    ctx.font = '20px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Director of Number Sciences', 150, 810);
    
    // Signature (decorative script)
    ctx.font = 'italic 32px cursive';
    ctx.fillStyle = '#8b5a2b';
    ctx.fillText('Dr. Numerius Guessworth', 150, 780);

    // Official stamp
    ctx.textAlign = 'right';
    ctx.font = '18px serif';
    ctx.fillStyle = '#2c1810';
    ctx.fillText('Number Guesser Academy', 1050, 800);
    ctx.fillText('Certified Brain Training Institute', 1050, 820);

    // Watermark
    ctx.save();
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = '#8b5a2b';
    ctx.font = 'bold 120px serif';
    ctx.textAlign = 'center';
    ctx.translate(600, 450);
    ctx.rotate(-Math.PI / 6);
    ctx.fillText('CERTIFIED', 0, 0);
    ctx.restore();

    // Download
    const link = document.createElement('a');
    link.download = `number-guesser-diploma-${playerName.replace(/\s+/g, '-').toLowerCase()}-${currentDate.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();

    toast({
      title: "🎓 Diploma Downloaded!",
      description: `Your official certificate for ${playerName} has been saved!`,
    });

    setIsOpen(false);
    onGenerate?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2 shadow-button">
          <Award className="h-5 w-5" />
          Get Your Diploma
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Generate Your Official Diploma
          </DialogTitle>
        </DialogHeader>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0 space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your name to generate a personalized university-style diploma for correctly guessing the number {targetNumber}!
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Enter your full name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="text-center"
                maxLength={50}
              />
              <Button 
                onClick={generateDiploma} 
                className="w-full gap-2"
                disabled={!playerName.trim()}
              >
                <Download className="h-4 w-4" />
                Generate & Download Diploma
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Your diploma will be a high-quality PNG file suitable for printing or sharing.
            </p>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default DiplomaGenerator;