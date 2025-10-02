import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-accent/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Own Your Digital Life.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                End the chaos of scattered files, endless subscriptions, and privacy worries with Aegis.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg"
              >
                Join the Revolution
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl transform scale-105"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758598306174-78795a972fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZGV2aWNlJTIwaG9tZSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU5MzkwNjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Aegis personal digital server in modern living space"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg h-auto object-cover"
                width="500"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}