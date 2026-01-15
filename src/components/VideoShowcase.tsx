import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Video, X } from "lucide-react";
import { useState } from "react";

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showFeaturedVideo, setShowFeaturedVideo] = useState(false);

  const featuredVideoId = "htZ1CQdXOJ0"; // Free Training & Website Introduction

  const videos = [
    {
      title: "Mindset Mastery",
      description: "Learn the mental frameworks that successful men use daily",
      thumbnail: `https://img.youtube.com/vi/6WSbf94hyng/maxresdefault.jpg`,
      videoId: "6WSbf94hyng"
    },
    {
      title: "Wealth Building",
      description: "Discover proven methods to build passive income streams",
      thumbnail: `https://img.youtube.com/vi/mrbEl5eA1qI/maxresdefault.jpg`,
      videoId: "mrbEl5eA1qI"
    },
    {
      title: "Physical Excellence",
      description: "The complete guide to building a strong, healthy body",
      thumbnail: `https://img.youtube.com/vi/iA8_hbJw_Os/maxresdefault.jpg`,
      videoId: "iA8_hbJw_Os"
    },
    {
      title: "Spiritual Foundation",
      description: "Connect with your purpose and unlock inner strength",
      thumbnail: `https://img.youtube.com/vi/2d81z99TXQQ/maxresdefault.jpg`,
      videoId: "2d81z99TXQQ"
    },
    {
      title: "Modern Masculinity",
      description: "Embrace authentic masculinity in today's world",
      thumbnail: `https://img.youtube.com/vi/J9eEwO9kmUE/maxresdefault.jpg`,
      videoId: "J9eEwO9kmUE"
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
          
          {/* Featured Training Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-card border-primary/20 overflow-hidden">
              <div className="aspect-video relative">
                {showFeaturedVideo ? (
                  <div className="relative w-full h-full">
                    <button
                      onClick={() => setShowFeaturedVideo(false)}
                      className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-black p-2 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <iframe
                      src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1`}
                      title="Free Training Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div 
                    className="w-full h-full bg-cover bg-center cursor-pointer relative group"
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg)` }}
                    onClick={() => setShowFeaturedVideo(true)}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-primary rounded-full p-6 mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <PlayCircle size={64} className="text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Watch Free Training</h3>
                        <p className="text-muted-foreground">Discover the 5 Pillars of Masculine Excellence</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth overflow-hidden group cursor-pointer"
              onClick={() => setActiveVideo(activeVideo === video.videoId ? null : video.videoId)}
            >
              <div className="relative aspect-video overflow-hidden">
                {activeVideo === video.videoId ? (
                  <div className="relative w-full h-full">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideo(null);
                      }}
                      className="absolute top-2 right-2 z-20 bg-black/80 hover:bg-black p-1.5 rounded-full transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <>
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
                  </>
                )}
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
