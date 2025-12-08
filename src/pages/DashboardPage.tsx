import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Session } from "@supabase/supabase-js";
import { Play, BookOpen, Users, LogOut, Crown, Video } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Purchase {
  id: string;
  course_id: string;
  amount: number;
  status: string;
  purchased_at: string;
  courses: {
    title: string;
    description: string;
  } | null;
}

interface VideoItem {
  id: string;
  title: string;
  description: string;
  video_url: string;
  video_type: string;
  thumbnail_url: string | null;
  duration: string | null;
  is_free: boolean;
}

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [freeVideos, setFreeVideos] = useState<VideoItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate("/auth");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate("/auth");
      } else {
        fetchUserData(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchUserData = async (userId: string) => {
    setIsLoading(true);
    
    // Fetch purchases with course details
    const { data: purchaseData } = await supabase
      .from("purchases")
      .select(`
        id,
        course_id,
        amount,
        status,
        purchased_at,
        courses (
          title,
          description
        )
      `)
      .eq("user_id", userId)
      .eq("status", "completed");

    if (purchaseData) {
      setPurchases(purchaseData as Purchase[]);
    }

    // Fetch free videos
    const { data: videoData } = await supabase
      .from("videos")
      .select("*")
      .eq("is_free", true);

    if (videoData) {
      setFreeVideos(videoData as VideoItem[]);
    }

    setIsLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Welcome, <span className="text-primary">{user?.user_metadata?.full_name || "Member"}</span>
            </h1>
            <p className="text-muted-foreground">Access your courses, videos, and exclusive content</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-card border-border hover:shadow-premium transition-smooth cursor-pointer" onClick={() => navigate("/courses")}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Browse Courses</h3>
                  <p className="text-sm text-muted-foreground">Explore our programs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:shadow-premium transition-smooth cursor-pointer" onClick={() => navigate("/mastermind")}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mastermind Groups</h3>
                  <p className="text-sm text-muted-foreground">Join the community</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:shadow-premium transition-smooth cursor-pointer" onClick={() => navigate("/coaching")}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Crown className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">1-on-1 Coaching</h3>
                  <p className="text-sm text-muted-foreground">Personal guidance</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchased Content */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">My Courses</h2>
            {purchases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {purchases.map((purchase) => (
                  <Card key={purchase.id} className="bg-gradient-card border-border overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                      <Play className="h-16 w-16 text-primary" />
                    </div>
                    <CardHeader>
                      <CardTitle>{purchase.courses?.title || "Course"}</CardTitle>
                      <CardDescription>{purchase.courses?.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="hero" className="w-full">
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-12 text-center">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
                  <p className="text-muted-foreground mb-6">Start your transformation journey with our premium courses</p>
                  <Button variant="hero" onClick={() => navigate("/courses")}>
                    Browse Courses
                  </Button>
                </CardContent>
              </Card>
            )}
          </section>

          {/* Free Content */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Free Training Videos</h2>
            {freeVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freeVideos.map((video) => (
                  <Card key={video.id} className="bg-gradient-card border-border overflow-hidden group cursor-pointer">
                    <div className="relative h-48 bg-black/20">
                      {video.thumbnail_url ? (
                        <img 
                          src={video.thumbnail_url} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary/20 to-primary/5">
                          <Video className="h-16 w-16 text-primary" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary rounded-full p-4">
                          <Play className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                      {video.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
                          {video.duration}
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-12 text-center">
                  <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground">Free training videos will be available here</p>
                </CardContent>
              </Card>
            )}
          </section>

          {/* Account Actions */}
          <div className="flex justify-end">
            <Button variant="outline" onClick={handleSignOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;