import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featured_image: string | null;
  author_name: string;
  published_at: string | null;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: null, name: "All" },
    { id: "articles", name: "Articles" },
    { id: "success-stories", name: "Success Stories" },
    { id: "news", name: "News" },
  ];

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]);

  const fetchPosts = async () => {
    setLoading(true);
    let query = supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, category, featured_image, author_name, published_at")
      .order("published_at", { ascending: false });

    if (selectedCategory) {
      query = query.eq("category", selectedCategory);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "articles":
        return "bg-blue-500/20 text-blue-400";
      case "success-stories":
        return "bg-green-500/20 text-green-400";
      case "news":
        return "bg-purple-500/20 text-purple-400";
      default:
        return "bg-secondary text-muted-foreground";
    }
  };

  const formatCategoryName = (category: string) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover strategies, success stories, and insights to help you become the best version of yourself.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat.id || "all"}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.id)}
                  size="sm"
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-48 bg-secondary/50"></div>
                    <CardHeader>
                      <div className="h-6 bg-secondary/50 rounded w-3/4"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-4 bg-secondary/30 rounded w-full mb-2"></div>
                      <div className="h-4 bg-secondary/30 rounded w-2/3"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No posts found in this category.</p>
                <Button className="mt-4" onClick={() => setSelectedCategory(null)}>
                  View All Posts
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link to={`/blog/${post.slug}`} key={post.id}>
                    <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                      {post.featured_image ? (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                          <span className="text-4xl opacity-50">📝</span>
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getCategoryColor(post.category)}>
                            {formatCategoryName(post.category)}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User size={14} />
                            <span>{post.author_name}</span>
                          </div>
                          {post.published_at && (
                            <div className="flex items-center gap-2">
                              <Calendar size={14} />
                              <span>{format(new Date(post.published_at), "MMM d, yyyy")}</span>
                            </div>
                          )}
                        </div>
                        <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get the latest articles, success stories, and exclusive content delivered to your inbox.
            </p>
            <Button size="lg" onClick={() => window.location.href = "/#newsletter"}>
              Subscribe to Newsletter
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;