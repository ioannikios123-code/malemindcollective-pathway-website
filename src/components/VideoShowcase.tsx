import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Video } from "lucide-react";
import { useState } from "react";

const VideoShowcase = () => {
  const [showVideo, setShowVideo] = useState(false);

  const videos = [
    {
      title: "Transform Your Mindset",
      description: "Learn the mental frameworks that successful men use daily",
      thumbnail: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12:45",
      videoUrl: "" // User will add their video URL here
    },
    {
      title: "Wealth Building Strategies",
      description: "Discover proven methods to build passive income streams",
      thumbnail: "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "15:30",
      videoUrl: ""
    },
    {
      title: "Physical Transformation",
      description: "The complete guide to building a strong, healthy body",
      thumbnail: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "18:20",
      videoUrl: ""
    },
    {
      title: "Spiritual Mastery",
      description: "Connect with your purpose and unlock inner strength",
      thumbnail: "https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "14:15",
      videoUrl: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Watch Our
            <span className="text-primary block">Free Training Videos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get instant access to our library of transformation videos. Learn from real success 
            stories and expert insights that will accelerate your journey.
          </p>
          
          {/* Featured Training Video - User can add their YouTube/Vimeo URL */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-card border-primary/20 overflow-hidden">
              <div className="aspect-video bg-black/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <PlayCircle size={80} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Watch Free Training</h3>
                  <p className="text-muted-foreground mb-4">Discover the 5 Pillars of Masculine Excellence</p>
                  <p className="text-sm text-muted-foreground italic">
                    (Add your YouTube/Vimeo video URL in the code to display it here)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary rounded-full p-4">
                    <PlayCircle size={48} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video size={20} className="text-primary" />
                  {video.title}
                </CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 text-muted-foreground">
            Want access to our complete video library and premium content?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Get Full Access</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
