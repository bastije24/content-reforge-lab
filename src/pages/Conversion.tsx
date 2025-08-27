import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Upload, Download, ArrowRight, FileVideo, FileImage, Music } from "lucide-react";

const conversionHistory = [
  {
    id: 1,
    input: "MP4",
    output: "WebM",
    fileName: "presentation_video.mp4",
    status: "completed",
    size: "24.6 MB → 18.2 MB"
  },
  {
    id: 2,
    input: "MOV",
    output: "MP4",
    fileName: "iphone_recording.mov",
    status: "processing",
    size: "156.3 MB → ~120 MB"
  },
  {
    id: 3,
    input: "PNG",
    output: "JPG",
    fileName: "product_photos_batch.zip",
    status: "completed",
    size: "45.1 MB → 12.8 MB"
  }
];

const formats = {
  video: ["MP4", "WebM", "MOV", "AVI", "MKV", "FLV"],
  image: ["JPG", "PNG", "WebP", "BMP", "TIFF", "SVG"],
  audio: ["MP3", "WAV", "FLAC", "AAC", "OGG", "M4A"]
};

const getFormatIcon = (format: string) => {
  const videoFormats = ["MP4", "WebM", "MOV", "AVI", "MKV", "FLV"];
  const imageFormats = ["JPG", "PNG", "WebP", "BMP", "TIFF", "SVG"];
  const audioFormats = ["MP3", "WAV", "FLAC", "AAC", "OGG", "M4A"];
  
  if (videoFormats.includes(format)) return FileVideo;
  if (imageFormats.includes(format)) return FileImage;
  if (audioFormats.includes(format)) return Music;
  return FileVideo;
};

export default function Conversion() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">File Conversion</h1>
          <p className="text-muted-foreground mt-2">Convert between different media formats efficiently</p>
        </div>
      </div>

      {/* Conversion Tool */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-2xl border-0 shadow-subtle">
          <CardHeader>
            <CardTitle className="text-lg">Convert Files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Upload Area */}
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-2xl p-8 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">Upload files to convert</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop files here, or click to browse
              </p>
              <Button variant="outline" className="rounded-2xl">
                Choose Files
              </Button>
            </div>

            {/* Format Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">From</label>
                <Select>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder="Select input format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp4">MP4 (Video)</SelectItem>
                    <SelectItem value="mov">MOV (Video)</SelectItem>
                    <SelectItem value="png">PNG (Image)</SelectItem>
                    <SelectItem value="jpg">JPG (Image)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">To</label>
                <Select>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder="Select output format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="webm">WebM (Video)</SelectItem>
                    <SelectItem value="mp4">MP4 (Video)</SelectItem>
                    <SelectItem value="webp">WebP (Image)</SelectItem>
                    <SelectItem value="jpg">JPG (Image)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full bg-gradient-primary hover:opacity-90 text-white rounded-2xl">
              <RefreshCw className="h-4 w-4 mr-2" />
              Start Conversion
            </Button>
          </CardContent>
        </Card>

        {/* Format Support */}
        <Card className="rounded-2xl border-0 shadow-subtle">
          <CardHeader>
            <CardTitle className="text-lg">Supported Formats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center">
                <FileVideo className="h-4 w-4 mr-2 text-brand-primary" />
                Video Formats
              </h4>
              <div className="flex flex-wrap gap-1">
                {formats.video.map((format) => (
                  <Badge key={format} variant="outline" className="text-xs rounded-lg">
                    {format}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center">
                <FileImage className="h-4 w-4 mr-2 text-brand-secondary" />
                Image Formats
              </h4>
              <div className="flex flex-wrap gap-1">
                {formats.image.map((format) => (
                  <Badge key={format} variant="outline" className="text-xs rounded-lg">
                    {format}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center">
                <Music className="h-4 w-4 mr-2 text-brand-accent" />
                Audio Formats
              </h4>
              <div className="flex flex-wrap gap-1">
                {formats.audio.map((format) => (
                  <Badge key={format} variant="outline" className="text-xs rounded-lg">
                    {format}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion History */}
      <Card className="rounded-2xl border-0 shadow-subtle">
        <CardHeader>
          <CardTitle className="text-lg">Recent Conversions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {conversionHistory.map((item, index) => {
            const InputIcon = getFormatIcon(item.input);
            const OutputIcon = getFormatIcon(item.output);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center space-x-4 p-4 bg-muted/30 rounded-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-muted rounded-xl flex items-center justify-center">
                    <InputIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Badge variant="outline" className="text-xs rounded-lg">
                    {item.input}
                  </Badge>
                </div>

                <ArrowRight className="h-4 w-4 text-muted-foreground" />

                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-primary/20 rounded-xl flex items-center justify-center">
                    <OutputIcon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs rounded-lg">
                    {item.output}
                  </Badge>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{item.fileName}</h4>
                  <p className="text-sm text-muted-foreground">{item.size}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={item.status === "completed" ? "default" : "secondary"}
                    className={`text-xs rounded-lg ${
                      item.status === "completed" 
                        ? "bg-green-500 text-white" 
                        : "bg-gradient-primary text-white"
                    }`}
                  >
                    {item.status}
                  </Badge>
                  {item.status === "completed" && (
                    <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}