import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-md mx-4 bg-accent border-accent/50">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">404 Page Not Found</h1>
          </div>

          <p className="mt-4 mb-6 text-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/">
            <span className="px-4 py-2 rounded-md bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors cursor-pointer inline-block">
              Return Home
            </span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
