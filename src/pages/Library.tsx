import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Video, Image, FileText, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const projects = [
  { id: 1, name: "TikTok Campaign Q4", type: "video", files: 12, lastEdited: "2 hours ago" },
  { id: 2, name: "Instagram Reels", type: "video", files: 8, lastEdited: "1 day ago" },
  { id: 3, name: "YouTube Shorts", type: "video", files: 15, lastEdited: "3 days ago" },
  { id: 4, name: "Product Photos", type: "image", files: 24, lastEdited: "1 week ago" },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video": return Video;
    case "image": return Image;
    default: return FileText;
  }
};

export default function Library() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Media Library</h1>
          <p className="text-muted-foreground mt-2">Manage your projects and media files</p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90 text-white rounded-2xl px-6 shadow-secondary">
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => {
          const TypeIcon = getTypeIcon(project.type);
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Card className="hover:shadow-secondary transition-all duration-300 rounded-2xl border-0 shadow-subtle">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Avatar className="h-10 w-10 bg-gradient-secondary">
                      <AvatarFallback className="text-white">
                        <TypeIcon className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{project.files} files</span>
                      <span>{project.lastEdited}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Card className="border-2 border-dashed border-muted-foreground/25 rounded-2xl">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Upload className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Upload new files</h3>
          <p className="text-muted-foreground text-center mb-4">
            Drag and drop your media files here, or click to browse
          </p>
          <Button variant="outline" className="rounded-2xl">
            Choose Files
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}