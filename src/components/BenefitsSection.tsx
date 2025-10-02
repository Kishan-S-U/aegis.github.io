import { Shield, Zap, Heart } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Freedom",
      description: "Finally have unlimited storage for all your photos and videos.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Control",
      description: "Your smart home works for you, and your data stays with you, always.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Know your memories are safe with automatic, encrypted backups.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Why Aegis?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the three pillars that make Aegis the ultimate solution for your digital life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}