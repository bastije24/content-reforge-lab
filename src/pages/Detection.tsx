import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Search, AlertTriangle, CheckCircle, Eye, Trash2, Copy } from "lucide-react";

const duplicateGroups = [
  {
    id: 1,
    similarity: 98,
    files: [
      { name: "IMG_001.jpg", size: "2.4 MB", path: "/uploads/photos/IMG_001.jpg" },
      { name: "IMG_001_copy.jpg", size: "2.4 MB", path: "/uploads/photos/IMG_001_copy.jpg" }
    ]
  },
  {
    id: 2,
    similarity: 85,
    files: [
      { name: "video_final.mp4", size: "45.2 MB", path: "/projects/video_final.mp4" },
      { name: "video_final_v2.mp4", size: "45.8 MB", path: "/projects/video_final_v2.mp4" },
      { name: "video_final_backup.mp4", size: "45.2 MB", path: "/backup/video_final_backup.mp4" }
    ]
  },
  {
    id: 3,
    similarity: 92,
    files: [
      { name: "logo_design.png", size: "156 KB", path: "/assets/logo_design.png" },
      { name: "logo_design_alt.png", size: "162 KB", path: "/assets/logo_design_alt.png" }
    ]
  }
];

const scanResults = {
  totalFiles: 1247,
  duplicatesFound: 23,
  spaceSaved: "127.3 MB",
  similarityThreshold: 80
};

export default function Detection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Duplicate Detection</h1>
          <p className="text-muted-foreground mt-2">Find and manage similar or duplicate media files</p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90 text-white rounded-2xl px-6 shadow-secondary">
          <Search className="h-4 w-4 mr-2" />
          Start New Scan
        </Button>
      </div>

      {/* Scan Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-2xl border-0 shadow-subtle">
          <CardHeader>
            <CardTitle className="text-lg">Detection Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">
                Similarity Threshold: {scanResults.similarityThreshold}%
              </label>
              <Slider
                defaultValue={[scanResults.similarityThreshold]}
                max={100}
                min={50}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Less Strict (50%)</span>
                <span>More Strict (100%)</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">File Types to Scan</h4>
              <div className="space-y-2">
                {["Images (JPG, PNG, WebP)", "Videos (MP4, MOV, WebM)", "Audio (MP3, WAV, FLAC)"].map((type, index) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      defaultChecked={index < 2}
                      className="rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                    />
                    <span className="text-sm text-foreground">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button className="w-full bg-gradient-primary hover:opacity-90 text-white rounded-2xl">
              <Search className="h-4 w-4 mr-2" />
              Run Detection Scan
            </Button>
          </CardContent>
        </Card>

        {/* Scan Results Overview */}
        <Card className="rounded-2xl border-0 shadow-subtle">
          <CardHeader>
            <CardTitle className="text-lg">Last Scan Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-subtle rounded-2xl">
                <div className="text-2xl font-bold text-foreground">{scanResults.totalFiles}</div>
                <div className="text-sm text-muted-foreground">Files Scanned</div>
              </div>
              <div className="text-center p-4 bg-gradient-subtle rounded-2xl">
                <div className="text-2xl font-bold text-orange-500">{scanResults.duplicatesFound}</div>
                <div className="text-sm text-muted-foreground">Duplicates Found</div>
              </div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-xl font-bold text-green-600">{scanResults.spaceSaved}</div>
              <div className="text-sm text-green-600">Potential Space Savings</div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Last scan completed 2 hours ago</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Duplicate Groups */}
      <Card className="rounded-2xl border-0 shadow-subtle">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
            Duplicate Groups Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {duplicateGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="border border-muted rounded-2xl p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant="outline" 
                    className={`rounded-xl ${
                      group.similarity >= 95 
                        ? "border-red-200 text-red-600 bg-red-50" 
                        : group.similarity >= 85 
                        ? "border-orange-200 text-orange-600 bg-orange-50"
                        : "border-yellow-200 text-yellow-600 bg-yellow-50"
                    }`}
                  >
                    {group.similarity}% Similar
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {group.files.length} files in group
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>

              <div className="grid gap-3">
                {group.files.map((file, fileIndex) => (
                  <div 
                    key={fileIndex}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <Copy className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{file.name}</div>
                        <div className="text-sm text-muted-foreground">{file.size}</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                      {file.path}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {duplicateGroups.length === 0 && (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No Duplicates Found</h3>
              <p className="text-muted-foreground">
                Your media library is clean! Run a new scan to check for duplicates.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}