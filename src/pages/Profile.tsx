import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import starfieldBg from "@/assets/starfield-bg.jpg";
import { Sparkles, MapPin, Settings, Edit, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <main 
      className="min-h-screen relative overflow-hidden pb-20"
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
          <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header Card */}
          <div className="glass-card rounded-3xl p-6 space-y-6 animate-slide-up">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 flex items-center justify-center star-glow">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-foreground">Alex</h2>
                    <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="glass-card border-border/50 text-foreground hover:bg-primary/10">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>

            {/* AI Summary */}
            <div className="glass-card p-4 rounded-2xl border border-accent/30 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent animate-twinkle" />
                <span className="text-sm font-medium text-foreground">AI Summary</span>
              </div>
              <p className="text-sm text-foreground/70">
                A creative soul who finds beauty in the small moments. Loves deep conversations, 
                late-night stargazing, and exploring hidden coffee shops.
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="glass-card rounded-3xl p-6 space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold text-foreground">About Me</h3>
            <p className="text-foreground/70 italic">
              "I'm looking for someone who sees magic in rain and finds adventure in everyday moments."
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="glass-card border-border/30 text-foreground/70">
                Art Lover
              </Badge>
              <Badge variant="secondary" className="glass-card border-border/30 text-foreground/70">
                Coffee Enthusiast
              </Badge>
              <Badge variant="secondary" className="glass-card border-border/30 text-foreground/70">
                Stargazer
              </Badge>
              <Badge variant="secondary" className="glass-card border-border/30 text-foreground/70">
                Philosophy
              </Badge>
            </div>
          </div>

          {/* Photos Section */}
          <div className="glass-card rounded-3xl p-6 space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Photos</h3>
              <span className="text-sm text-foreground/60">3/6</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center"
                >
                  <Sparkles className="h-8 w-8 text-primary/30" />
                </div>
              ))}
            </div>
          </div>

          {/* Premium Section */}
          <div className="glass-card rounded-3xl p-6 space-y-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/30 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Aureole Plus</h3>
            </div>
            <p className="text-foreground/70">
              Unlock unlimited AI replies, boosted visibility, and custom cosmic backgrounds.
            </p>
            <Button className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground">
              Unlock Full Constellation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
