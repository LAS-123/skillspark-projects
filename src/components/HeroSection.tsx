import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_2px,_transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Build Your
              <span className="block text-gradient">Future</span>
              Through Projects
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Discover real-world project ideas designed to enhance your practical skills 
              and solve meaningful problems across technology, environment, healthcare, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" className="group">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Projects
              </Button>
              
              <Button variant="outline" size="xl" className="btn-secondary">
                Submit Your Idea
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="animate-fade-in-up animate-delay-100">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-muted-foreground">Project Ideas</div>
              </div>
              <div className="animate-fade-in-up animate-delay-200">
                <div className="text-3xl font-bold text-gradient">4</div>
                <div className="text-muted-foreground">Categories</div>
              </div>
              <div className="animate-fade-in-up animate-delay-300">
                <div className="text-3xl font-bold text-gradient">1K+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="Students collaborating on innovative projects" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full animate-float animate-delay-100"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-glow/10 rounded-full animate-float animate-delay-200"></div>
            <div className="absolute top-1/2 -right-20 w-16 h-16 bg-accent/20 rounded-full animate-float animate-delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;