import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, AlertCircle, Pause, Play, X, Download } from "lucide-react";

const queueItems = [
  {
    id: 1,
    name: "TikTok_Campaign_Final.mp4",
    status: "rendering",
    progress: 65,
    timeRemaining: "2m 15s",
    format: "MP4 • 1080p • 9:16",
    size: "12.4 MB"
  },
  {
    id: 2,
    name: "Instagram_Reel_Batch_1-5.mp4",
    status: "queued",
    progress: 0,
    timeRemaining: "~8m",
    format: "MP4 • 1080p • 9:16",
    size: "45.2 MB"
  },
  {
    id: 3,
    name: "YouTube_Shorts_Collection.mp4",
    status: "done",
    progress: 100,
    timeRemaining: "Completed",
    format: "MP4 • 4K • 9:16", 
    size: "128.7 MB"
  },
  {
    id: 4,
    name: "Product_Demo_Variants.mp4",
    status: "error",
    progress: 0,
    timeRemaining: "Failed",
    format: "MP4 • 1080p • 16:9",
    size: "67.1 MB"
  },
  {
    id: 5,
    name: "LinkedIn_Posts_Batch.jpg",
    status: "done",
    progress: 100,
    timeRemaining: "Completed",
    format: "JPG • 1080x1080",
    size: "8.9 MB"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "rendering": return Clock;
    case "queued": return Clock;
    case "done": return CheckCircle;
    case "error": return AlertCircle;
    default: return Clock;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "rendering": return "bg-gradient-primary text-white";
    case "queued": return "bg-muted text-muted-foreground";
    case "done": return "bg-green-500 text-white";
    case "error": return "bg-red-500 text-white";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Queue() {
  const activeJobs = queueItems.filter(item => item.status === "rendering" || item.status === "queued").length;
  const completedJobs = queueItems.filter(item => item.status === "done").length;
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Render Queue</h1>
          <p className="text-muted-foreground mt-2">Monitor your video processing and exports</p>
        </div>
        
        <div className="flex space-x-3">
          <Button variant="outline" className="rounded-2xl">
            <Pause className="h-4 w-4 mr-2" />
            Pause All
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 text-white rounded-2xl px-6 shadow-secondary">
            <Play className="h-4 w-4 mr-2" />
            Resume All
          </Button>
        </div>
      </div>

      {/* Queue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-0 shadow-subtle">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                <p className="text-2xl font-bold text-foreground">{activeJobs}</p>
              </div>
              <div className="h-12 w-12 bg-gradient-primary/20 rounded-2xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-brand-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-subtle">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-foreground">{completedJobs}</p>
              </div>
              <div className="h-12 w-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-subtle">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Size</p>
                <p className="text-2xl font-bold text-foreground">262.3 MB</p>
              </div>
              <div className="h-12 w-12 bg-gradient-secondary/20 rounded-2xl flex items-center justify-center">
                <Download className="h-6 w-6 text-brand-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Queue List */}
      <Card className="rounded-2xl border-0 shadow-subtle">
        <CardHeader>
          <CardTitle className="text-lg">Queue Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {queueItems.map((item, index) => {
            const StatusIcon = getStatusIcon(item.status);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center space-x-4 p-4 bg-muted/30 rounded-2xl"
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${getStatusColor(item.status)}`}>
                  <StatusIcon className="h-5 w-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs rounded-lg">
                        {item.status.toUpperCase()}
                      </Badge>
                      {item.status === "done" && (
                        <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="p-1 h-8 w-8 text-muted-foreground hover:text-red-500">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{item.format}</span>
                    <span>{item.size}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {item.status === "rendering" && (
                      <>
                        <Progress value={item.progress} className="flex-1 mr-3 h-2" />
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {item.timeRemaining} remaining
                        </span>
                      </>
                    )}
                    {item.status === "queued" && (
                      <span className="text-xs text-muted-foreground">
                        Estimated: {item.timeRemaining}
                      </span>
                    )}
                    {item.status === "done" && (
                      <span className="text-xs text-green-600">
                        {item.timeRemaining}
                      </span>
                    )}
                    {item.status === "error" && (
                      <span className="text-xs text-red-500">
                        {item.timeRemaining} - Click to retry
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}