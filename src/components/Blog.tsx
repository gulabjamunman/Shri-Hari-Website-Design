import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Benefits of Multimodal Transportation in Modern Logistics",
    excerpt:
      "Discover how combining road, rail, and sea transport can reduce costs and mitigate supply chain risks.",
    category: "Industry Insights",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding EXIM Documentation: A Complete Guide",
    excerpt:
      "Navigate the complexities of import-export documentation with our comprehensive step-by-step guide.",
    category: "Guides",
    date: "Jan 10, 2026",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "How Rail Freight is Transforming Indian Logistics",
    excerpt:
      "The rise of dedicated freight corridors and their impact on supply chain efficiency across India.",
    category: "Industry News",
    date: "Jan 5, 2026",
    readTime: "4 min read",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
              Knowledge Hub
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Latest Insights & News
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Articles
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Category banner */}
              <div className="h-32 bg-navy-gradient flex items-center justify-center relative overflow-hidden">
                <span className="text-white/10 font-display text-6xl font-bold absolute">
                  0{post.id}
                </span>
                <span className="relative z-10 text-accent text-sm font-semibold px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Button variant="ghost" className="text-secondary hover:text-secondary-foreground hover:bg-secondary group/btn p-0 h-auto">
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
