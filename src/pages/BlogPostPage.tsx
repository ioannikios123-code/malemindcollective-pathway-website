import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image: string | null;
  author_name: string;
  published_at: string | null;
}

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
      navigate("/blog");
    } else {
      setPost(data);
    }
    setLoading(false);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: url,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    }
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

  const renderContent = (content: string) => {
    // Simple markdown-like rendering
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
            {paragraph.replace("# ", "")}
          </h1>
        );
      }
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((item) => item.startsWith("- "));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      if (paragraph.match(/^\d+\./)) {
        const items = paragraph.split("\n").filter((item) => item.match(/^\d+\./));
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
            ))}
          </ol>
        );
      }
      // Handle bold text
      const formattedParagraph = paragraph.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );
      return (
        <p
          key={index}
          className="mb-4 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-secondary/50 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-secondary/30 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-secondary/50 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-secondary/30 rounded"></div>
              <div className="h-4 bg-secondary/30 rounded"></div>
              <div className="h-4 bg-secondary/30 rounded w-2/3"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />
      <main>
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <Badge className={`${getCategoryColor(post.category)} mb-4`}>
                {formatCategoryName(post.category)}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author_name}</span>
                </div>
                {post.published_at && (
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{format(new Date(post.published_at), "MMMM d, yyyy")}</span>
                  </div>
                )}
                <Button variant="ghost" size="sm" onClick={handleShare} className="ml-auto">
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-secondary/30 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of men who have already started their journey with Male Mind Collective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate("/apply")}>
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/courses")}>
                  View Courses
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;