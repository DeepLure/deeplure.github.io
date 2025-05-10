import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, BellRing, Sparkles } from "lucide-react";

export default function Research() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 md:p-10">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-georama mb-8 text-primary">Research</h1>
        
        <div className="mb-10">
          <p className="text-lg text-muted-foreground">
            At DeepLure, we're constantly pushing the boundaries of artificial intelligence 
            to create more accessible and powerful solutions. Here are some of our current 
            research initiatives.
          </p>
        </div>
        
        {/* Secret Firefly Project */}
        <div className="mb-16">
          <Card className="bg-accent/10 border-accent/5 overflow-hidden">
            {/* Card Header with Project Title */}
            <CardHeader className="relative">
              {/* Secret Project Badge */}
              <div className="absolute top-4 right-4 bg-secondary/10 px-2 py-1 rounded-full flex items-center gap-1">
                <Lock className="h-3.5 w-3.5 text-secondary" />
                <span className="text-xs text-secondary">Secret Project</span>
              </div>
              
              {/* Project Title */}
              <CardTitle className="text-2xl font-georama text-primary flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-secondary" />
                Project Firefly
              </CardTitle>
              
              {/* Brief Description */}
              <CardDescription className="text-muted-foreground">
                Our most ambitious AI project to date. Coming soon...
              </CardDescription>
            </CardHeader>
            
            {/* Card Content */}
            <CardContent className="pb-4">
              <div className="space-y-4 md:space-y-6">
                {/* Project Information Box */}
                <div className="p-4 rounded-lg bg-accent/20 border border-accent/10">
                  <p className="text-sm text-muted-foreground">
                    Project Firefly is currently in stealth mode. We can't reveal much yet, 
                    but we can tell you it will revolutionize how we interact with artificial 
                    intelligence systems. Stay tuned for the big reveal.
                  </p>
                </div>
                
                {/* Email Notification Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <BellRing className="h-4 w-4" />
                    Get Notified
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Be the first to know when we launch Project Firefly. Enter your email to join 
                    our exclusive waiting list.
                  </p>
                  
                  {/* Email Input and Button */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-background border-accent/30 focus-visible:ring-primary"
                      aria-label="Email address for notifications"
                    />
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      aria-label="Subscribe for notifications"
                    >
                      Notify Me
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            
            {/* Card Footer with Release Date */}
            <CardFooter className="pt-0 text-xs text-muted-foreground">
              Expected release: Q3 2025
            </CardFooter>
          </Card>
        </div>
        
        {/* Other Research Placeholder */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card className="bg-accent/5 border-accent/5">
            <CardHeader>
              <CardTitle className="text-xl font-georama text-primary">Neural Network Optimization</CardTitle>
              <CardDescription>Ongoing research</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced research on optimizing neural networks for efficiency and effectiveness 
                across various domains and applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/5 border-accent/5">
            <CardHeader>
              <CardTitle className="text-xl font-georama text-primary">AI Ethics Framework</CardTitle>
              <CardDescription>Active initiative</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developing comprehensive ethical guidelines for AI development, implementation, 
                and deployment across industries.
              </p>
            </CardContent>
          </Card>
        </div>
        
      </main>
    </div>
  );
}