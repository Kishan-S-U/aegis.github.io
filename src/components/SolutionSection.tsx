import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              The Solution: A Single, Unified Home.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aegis is your personal digital citadel. One beautiful device that centralizes all your photos, 
              files, smart home controls, and digital life. No more scattered subscriptions. No more privacy 
              concerns. Just complete control over your digital world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-green-50 border border-green-100">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-green-700">Centralized Storage</p>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-blue-700">Smart Home Hub</p>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-purple-50 border border-purple-100">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-purple-700">Privacy First</p>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-indigo-700">No Monthly Fees</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl transform scale-110"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689596312367-39a4461504c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBjbGVhbiUyMHRlY2hub2xvZ3klMjBzZXR1cHxlbnwxfHx8fDE3NTkzOTA2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clean, organized technology setup"
                className="relative rounded-3xl shadow-xl w-full max-w-lg h-auto object-cover"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}