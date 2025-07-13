import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle>Our Commitment to Your Privacy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none space-y-6">
            <p>Number Guesser ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our daily number guessing game.</p>

            <div>
              <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
              <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>

              <h4 className="font-semibold mb-2 mt-4">Game Data</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your daily guesses (stored locally on your device)</li>
                <li>Game completion status</li>
                <li>Achievement certificates (generated locally)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">How We Use Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide and maintain our game service</li>
                <li>To understand how our service is used</li>
                <li>To improve user experience</li>
                <li>To detect and prevent technical issues</li>
                <li>To serve relevant advertisements (via Google AdSense)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Third-Party Services</h3>
              <p><strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google may use cookies and similar technologies to serve ads based on your interests. You can opt out of personalized advertising by visiting Google's Ad Settings.</p>
              <p><strong>Analytics:</strong> We may use analytics services to understand usage patterns and improve our service.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Data Storage</h3>
              <p>Your game progress is stored locally in your browser's local storage. We do not store personal information on our servers. Your data remains on your device and is not transmitted to us.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Clear your local game data at any time through your browser settings</li>
                <li>Disable cookies through your browser preferences</li>
                <li>Opt out of personalized advertising</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Children's Privacy</h3>
              <p>Our service is appropriate for all ages. We do not knowingly collect personal information from children under 13. If you are a parent and believe your child has provided personal information, please contact us.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Changes to This Policy</h3>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last updated" date.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us through our contact page.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;