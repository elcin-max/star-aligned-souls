import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import starfieldBg from "@/assets/starfield-bg.jpg";
import { Sparkles, MapPin, Heart, X, Star, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const mockProfiles = [
  {
    id: 1,
    name: "Sarah",
    age: 26,
    distance: "3 km away",
    bio: "I'm looking for someone who sees magic in rain",
    tags: ["Art Lover", "Coffee Enthusiast", "Stargazer"],
    verified: true,
    aiInsight: "Your orbits align on creativity and mindfulness"
  },
  {
    id: 2,
    name: "Alex",
    age: 28,
    distance: "5 km away",
    bio: "Late night conversations under the stars",
    tags: ["Music", "Philosophy", "Adventure"],
    verified: true,
    aiInsight: "Strong connection in your love for deep conversations"
  }
];

const Discover = () => {
  const [currentProfile, setCurrentProfile] = useState(0);

  const handleLike = () => {
    if (currentProfile < mockProfiles.length - 1) {
      setCurrentProfile(currentProfile + 1);
    }
  };

  const handlePass = () => {
    if (currentProfile < mockProfiles.length - 1) {
      setCurrentProfile(currentProfile + 1);
    }
  };

  const profile = mockProfiles[currentProfile];

  return (
    <main 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${starfieldBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/95"></div>

      {/* Navigation */}
      <nav className="relative z-10 glass-card border-b border-border/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary animate-twinkle" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Aureole
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Tab Bar */}
      <div className="relative z-10 glass-card border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto py-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium whitespace-nowrap">Nearby</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-muted">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium whitespace-nowrap">Soulmates</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-muted">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium whitespace-nowrap">Fresh</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-muted">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium whitespace-nowrap">Premium</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {profile && (
            <div className="glass-card rounded-3xl overflow-hidden space-y-6 p-6 animate-slide-up">
              {/* Profile Image Placeholder */}
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-3xl font-bold text-foreground">{profile.name}, {profile.age}</h2>
                    {profile.verified && (
                      <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center star-glow">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{profile.distance}</span>
                  </div>
                </div>
              </div>

              {/* AI Insight */}
              <div className="glass-card p-4 rounded-2xl border border-accent/30">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 animate-twinkle" />
                  <p className="text-sm text-foreground/80">{profile.aiInsight}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-3">
                <p className="text-foreground/80 italic">"{profile.bio}"</p>
                <div className="flex flex-wrap gap-2">
                  {profile.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="glass-card border-border/30 text-foreground/70"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 glass-card border-border/50 text-foreground/60 hover:text-destructive hover:border-destructive/50"
                  onClick={handlePass}
                >
                  <X className="h-6 w-6 mr-2" />
                  Pass
                </Button>
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground soft-glow"
                  onClick={handleLike}
                >
                  <Heart className="h-6 w-6 mr-2" />
                  Like
                </Button>
              </div>
            </div>
          )}

          {currentProfile >= mockProfiles.length && (
            <div className="glass-card rounded-3xl p-12 text-center space-y-4">
              <Sparkles className="h-16 w-16 text-primary mx-auto animate-twinkle" />
              <h3 className="text-2xl font-bold text-foreground">No more profiles</h3>
              <p className="text-foreground/60">Check back later for new connections</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Discover;
