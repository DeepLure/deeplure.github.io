import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Team() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 md:p-10">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-georama mb-8 text-primary">Our Team</h1>
        
        <div className="mb-12">
          <p className="text-lg mb-6 text-muted-foreground">
            The brilliant minds behind DeepLure's vision for democratizing artificial intelligence.
          </p>
        </div>
        
        <div className="grid gap-8 mb-12">
          <Card className="bg-accent/10 border-accent/5 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-accent/30 p-6 flex justify-center">
                <Avatar className="h-64 w-64 rounded-full">
                  <AvatarFallback className="text-8xl bg-primary/10 text-primary">
                    HV
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <CardContent className="p-6 md:p-8 md:w-2/3">
                <h2 className="text-2xl font-semibold mb-2 text-primary">Harsha Vardhan</h2>
                <p className="text-secondary font-medium mb-4">Founder & CEO</p>
                
                <p className="text-foreground mb-6">
                  Leading DeepLure's mission to make artificial intelligence accessible, 
                  organized, and simplified for everyone. Expert in AI algorithms and 
                  democratizing complex technology.
                </p>
                
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        
        <div className="text-center text-muted-foreground mt-12">
          <p>We're growing! Interested in joining our team? Contact us.</p>
        </div>
      </main>
    </div>
  );
}