import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroCosmic from "@/assets/hero-cosmic.jpg";
import { Sparkles, Heart, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Cosmic Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${heroCosmic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 glass-card border-b border-border/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Aureole
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground soft-glow">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-float">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30">
              <Sparkles className="h-4 w-4 text-primary animate-twinkle" />
              <span className="text-sm text-foreground/80">Where souls connect under the same sky</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Find Your
            </span>
            <br />
            <span className="text-foreground">Celestial Match</span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
            A peaceful, cosmic haven where real connections happen. 
            Experience dating reimagined with AI-powered insights and serene design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 soft-glow"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link to="/discover">
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
              >
                Explore Universe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-card p-8 rounded-2xl space-y-4 hover:scale-105 transition-transform duration-300 animate-slide-up">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">AI-Powered Matching</h3>
            <p className="text-foreground/70">
              Our cosmic algorithm finds connections that truly resonate with your soul.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-4 hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Verified & Safe</h3>
            <p className="text-foreground/70">
              Live selfie verification ensures authentic connections in our celestial community.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-4 hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Intelligent Replies</h3>
            <p className="text-foreground/70">
              Get thoughtful AI suggestions to keep conversations flowing naturally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 mb-20">
        <div className="glass-card max-w-4xl mx-auto p-12 rounded-3xl text-center space-y-6 soft-glow">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Find Your Star?
          </h3>
          <p className="text-xl text-foreground/70">
            Join thousands discovering meaningful connections in our cosmic community.
          </p>
          <Link to="/auth">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground text-lg px-12 py-6 mt-4"
            >
              Begin Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
