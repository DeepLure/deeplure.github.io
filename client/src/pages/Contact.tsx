import { MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 md:p-10">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-georama mb-8 text-primary">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-accent/20 border-accent/10">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Location</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">G-56, Aerens Building</p>
                    <p className="text-muted-foreground">Green Park Main, New Delhi</p>
                    <p className="text-muted-foreground">Delhi, 110016</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-foreground">contact [at] deeplure [dot] org</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-foreground">+91 94756 54102</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div
              className="aspect-video md:aspect-square rounded-lg overflow-hidden bg-accent/30 flex items-center justify-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.0276331312964!2d77.20238364621345!3d28.556483371355196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce273aefc9451%3A0x585521d70d54537e!2sABL%20workspaces!5e0!3m2!1sen!2sin!4v1747761312430!5m2!1sen!2sin"
                width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/*<div className="text-center p-4">*/}
            {/*  <p className="text-primary text-lg">Map Placeholder</p>*/}
            {/*  <p className="text-muted-foreground text-sm">(Will be replaced with actual map)</p>*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="text-center text-muted-foreground text-sm mt-8">
          <p>Business hours: Monday to Friday, 9am - 5pm IST</p>
        </div>
      </main>
    </div>
  );
}