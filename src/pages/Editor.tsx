import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  Pause, 
  Volume2, 
  Scissors, 
  Type, 
  Sparkles, 
  Download,
  Square,
  Monitor,
  Smartphone,
  Settings,
  ToggleLeft
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export default function Editor() {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Video Editor</h1>
          <p className="text-muted-foreground mt-2">Edit and enhance your content</p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90 text-white rounded-2xl px-6 shadow-secondary">
          <Download className="h-4 w-4 mr-2" />
          Export Video
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {/* Video Player */}
        <div className="lg:col-span-2">
          <Card className="rounded-2xl border-0 shadow-subtle h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="aspect-video bg-black rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                <Play className="h-16 w-16 text-white" />
              </div>
              
              {/* Timeline */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Button size="sm" variant="outline" className="rounded-xl">
                    <Play className="h-4 w-4" />
                  </Button>
                  <div className="flex-1">
                    <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">01:23 / 03:45</span>
                </div>

                {/* Timeline tracks */}
                <div className="space-y-2">
                  <div className="h-12 bg-muted rounded-xl flex items-center px-3">
                    <span className="text-xs font-medium text-muted-foreground mr-3">VIDEO</span>
                    <div className="flex-1 h-8 bg-gradient-primary rounded-lg opacity-80" />
                  </div>
                  <div className="h-8 bg-muted rounded-xl flex items-center px-3">
                    <span className="text-xs font-medium text-muted-foreground mr-3">AUDIO</span>
                    <div className="flex-1 h-4 bg-gradient-secondary rounded-md opacity-60" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools Panel */}
        <div className="space-y-6">
          {/* Editing Tools */}
          <Card className="rounded-2xl border-0 shadow-subtle">
            <CardHeader>
              <CardTitle className="text-lg">Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start rounded-xl">
                <Scissors className="h-4 w-4 mr-2" />
                Cut & Trim
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-xl">
                <Type className="h-4 w-4 mr-2" />
                Add Captions
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-xl">
                <Sparkles className="h-4 w-4 mr-2" />
                AI Enhance
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-xl">
                <Volume2 className="h-4 w-4 mr-2" />
                Audio Mix
              </Button>
            </CardContent>
          </Card>

          {/* Export Settings */}
          <Card className="rounded-2xl border-0 shadow-subtle">
            <CardHeader>
              <CardTitle className="text-lg">Export Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Aspect Ratio
                </label>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <Square className="h-3 w-3 mr-1" />
                    1:1
                  </Button>
                  <Button variant="default" size="sm" className="rounded-xl bg-gradient-primary text-white">
                    <Smartphone className="h-3 w-3 mr-1" />
                    9:16
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <Monitor className="h-3 w-3 mr-1" />
                    16:9
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Resolution</span>
                  <Badge variant="secondary" className="rounded-xl">1080p</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Watermark</span>
                  <ToggleLeft className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Captions</span>
                  <ToggleLeft className="h-5 w-5 text-brand-primary" />
                </div>
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white rounded-xl">
                <Download className="h-4 w-4 mr-2" />
                Export Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}