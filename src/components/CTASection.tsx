import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Stop Paying to Rent Your Data.
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Join thousands of people who have taken control of their digital lives. 
                Own your data, protect your privacy, and never pay another cloud subscription again.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg shadow-lg"
              >
                Get Early Access
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl mb-1">5,000+</div>
                <div className="text-sm text-primary-foreground/60">Pre-orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">4.9★</div>
                <div className="text-sm text-primary-foreground/60">Early Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">$0</div>
                <div className="text-sm text-primary-foreground/60">Monthly Fees</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-white/20 rounded-3xl blur-3xl transform scale-105"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684057928849-ff793c0d5ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwc2VydmVyJTIwZGV2aWNlfGVufDF8fHx8MTc1OTM5MDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Aegis device - your personal digital citadel"
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