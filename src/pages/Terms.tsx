import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle>Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none space-y-6">
            <p>Welcome to Number Guesser. By using our daily number guessing game, you agree to these Terms and Conditions.</p>

            <div>
              <h3 className="text-xl font-semibold mb-3">Acceptance of Terms</h3>
              <p>By accessing and using Number Guesser, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our service.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Description of Service</h3>
              <p>Number Guesser is a free daily number guessing game where users attempt to guess a mystery number between 1 and 100. Users get one guess per day and can earn digital certificates for correct guesses.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">User Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to manipulate or cheat the game</li>
                <li>Not interfere with the service's functionality</li>
                <li>Respect the one-guess-per-day limitation</li>
                <li>Not engage in any harmful or disruptive behavior</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Intellectual Property</h3>
              <p>The Number Guesser game, including its design, code, and content, is our intellectual property. You may not copy, modify, or distribute our content without permission.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Game Rules</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>One guess per day per user</li>
                <li>Numbers range from 1 to 100</li>
                <li>Games reset daily at midnight UTC</li>
                <li>Certificates are generated locally and are for personal use</li>
                <li>No monetary value is associated with game achievements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Disclaimers</h3>
              <p>Number Guesser is provided "as is" without warranties of any kind. We do not guarantee continuous availability or error-free operation. The game is for entertainment purposes only.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
              <p>We shall not be liable for any indirect, incidental, or consequential damages arising from your use of Number Guesser. Our liability is limited to the maximum extent permitted by law.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Privacy</h3>
              <p>Your privacy is important to us. Please review our Privacy Policy to understand how we handle information.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Modifications</h3>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use constitutes acceptance of modified terms.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Termination</h3>
              <p>We may terminate or suspend access to our service immediately, without notice, for conduct that we believe violates these Terms or is harmful to other users.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <p>For questions about these Terms and Conditions, please contact us through our contact page.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;