import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Play, Smartphone, Square, Monitor, Heart } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "TikTok Viral",
    category: "Social Media",
    aspectRatio: "9:16",
    preview: "tiktok-preview.jpg",
    uses: 1284,
    type: "video",
    tags: ["trending", "captions", "music"]
  },
  {
    id: 2,
    name: "Instagram Reel",
    category: "Social Media", 
    aspectRatio: "9:16",
    preview: "insta-reel.jpg",
    uses: 956,
    type: "video",
    tags: ["stories", "modern", "minimal"]
  },
  {
    id: 3,
    name: "YouTube Short",
    category: "Social Media",
    aspectRatio: "9:16", 
    preview: "youtube-short.jpg",
    uses: 742,
    type: "video",
    tags: ["subscribe", "engagement", "colorful"]
  },
  {
    id: 4,
    name: "LinkedIn Post",
    category: "Professional",
    aspectRatio: "1:1",
    preview: "linkedin-post.jpg", 
    uses: 523,
    type: "image",
    tags: ["professional", "clean", "corporate"]
  },
  {
    id: 5,
    name: "Twitter Header",
    category: "Social Media",
    aspectRatio: "16:9",
    preview: "twitter-header.jpg",
    uses: 389,
    type: "image", 
    tags: ["banner", "brand", "header"]
  },
  {
    id: 6,
    name: "Product Showcase",
    category: "E-commerce",
    aspectRatio: "1:1",
    preview: "product-showcase.jpg",
    uses: 267,
    type: "video",
    tags: ["product", "showcase", "sales"]
  }
];

const getAspectIcon = (ratio: string) => {
  switch (ratio) {
    case "9:16": return Smartphone;
    case "1:1": return Square;
    case "16:9": return Monitor;
    default: return Square;
  }
};

export default function Templates() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Template Gallery</h1>
          <p className="text-muted-foreground mt-2">Choose from professional templates to get started quickly</p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {["All", "Social Media", "Professional", "E-commerce", "Marketing"].map((category) => (
          <Button
            key={category}
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className={`rounded-2xl ${
              category === "All" 
                ? "bg-gradient-primary text-white" 
                : "hover:bg-accent/50"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => {
          const AspectIcon = getAspectIcon(template.aspectRatio);
          
          return (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Card className="group hover:shadow-secondary transition-all duration-300 rounded-2xl border-0 shadow-subtle overflow-hidden">
                <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="rounded-xl bg-black/50 text-white border-0">
                      <AspectIcon className="h-3 w-3 mr-1" />
                      {template.aspectRatio}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-black/20 hover:bg-black/40">
                      <Heart className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="rounded-xl text-xs">
                      {template.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{template.uses} uses</span>
                  </div>
                  <CardTitle className="text-lg font-semibold">{template.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs rounded-lg">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 rounded-xl">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90 text-white rounded-xl">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}