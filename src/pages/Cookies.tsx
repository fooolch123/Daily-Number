import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle>How We Use Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none space-y-6">
            <p>This Cookie Policy explains how Number Guesser uses cookies and similar technologies when you visit our website.</p>

            <div>
              <h3 className="text-xl font-semibold mb-3">What Are Cookies?</h3>
              <p>Cookies are small text files that are stored on your device when you visit websites. They help websites remember information about your visit, which can make your next visit easier and the site more useful to you.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">How We Use Cookies</h3>
              
              <h4 className="font-semibold mb-2">Essential Cookies</h4>
              <p>These cookies are necessary for the website to function properly:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Game State:</strong> Stores your daily game progress locally</li>
                <li><strong>Theme Preference:</strong> Remembers your light/dark mode choice</li>
                <li><strong>Session Management:</strong> Maintains your game session</li>
              </ul>

              <h4 className="font-semibold mb-2 mt-4">Analytics Cookies</h4>
              <p>We may use analytics cookies to understand how visitors interact with our website:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages</li>
                <li>Popular features and content</li>
                <li>Device and browser information</li>
              </ul>

              <h4 className="font-semibold mb-2 mt-4">Advertising Cookies</h4>
              <p>We use Google AdSense to display advertisements. These cookies may:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Show relevant ads based on your interests</li>
                <li>Measure ad effectiveness</li>
                <li>Prevent the same ad from appearing too frequently</li>
                <li>Report on ad interactions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Third-Party Cookies</h3>
              <p><strong>Google AdSense:</strong> Google may set cookies to serve personalized advertisements. These cookies do not contain personally identifiable information but may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser and device information</li>
                <li>General location data (city/region level)</li>
                <li>Advertising preferences</li>
                <li>Previous ad interactions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Local Storage</h3>
              <p>In addition to cookies, we use your browser's local storage to save:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your daily game attempts and results</li>
                <li>Achievement history</li>
                <li>User preferences and settings</li>
              </ul>
              <p>This data stays on your device and is not transmitted to our servers.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Managing Cookies</h3>
              <p>You can control cookies through your browser settings:</p>
              
              <h4 className="font-semibold mb-2">Browser Controls</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete existing cookies</li>
                <li>Set notifications for new cookies</li>
              </ul>

              <h4 className="font-semibold mb-2 mt-4">Google Ad Settings</h4>
              <p>To opt out of personalized Google ads, visit <strong>Google Ad Settings</strong> and turn off ad personalization.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Impact of Disabling Cookies</h3>
              <p>If you disable cookies, some features of Number Guesser may not work properly:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your game progress won't be saved</li>
                <li>Theme preferences won't be remembered</li>
                <li>Some ads may be less relevant</li>
                <li>Analytics data won't be collected</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Updates to This Policy</h3>
              <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with a new "Last updated" date.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p>If you have questions about our use of cookies, please contact us through our contact page.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cookies;