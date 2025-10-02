import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-2xl transform scale-110"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2hhb3MlMjBzY2F0dGVyZWQlMjBkYXRhfGVufDF8fHx8MTc1OTM5MDY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital chaos and fragmented data visualization"
                className="relative rounded-3xl shadow-xl w-full max-w-lg h-auto object-cover"
                width="500"
                height="400"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              The Problem: Our Digital Lives are a Mess.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your photos are scattered across multiple cloud services. Your files live in different silos. 
              Your smart home devices don't talk to each other. And you're paying monthly fees to companies 
              that profit from your data while leaving you vulnerable to breaches and privacy violations.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-red-50 border border-red-100">
                <div className="text-2xl mb-2">📱</div>
                <p className="text-sm text-red-700">Multiple Apps</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-orange-50 border border-orange-100">
                <div className="text-2xl mb-2">💸</div>
                <p className="text-sm text-orange-700">Monthly Fees</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                <div className="text-2xl mb-2">🔓</div>
                <p className="text-sm text-yellow-700">Privacy Risks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}