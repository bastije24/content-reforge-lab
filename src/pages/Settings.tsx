import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Crown, 
  CreditCard, 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Download,
  Zap,
  Infinity
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subscription */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-2xl border-0 shadow-subtle overflow-hidden">
            <div className="bg-gradient-primary p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Crown className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">OnlySpoofer Pro</h3>
                    <p className="text-white/80">Unlimited everything, forever</p>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-white/30 rounded-xl">
                  Active
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Infinity className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="font-bold text-foreground">Unlimited</div>
                  <div className="text-sm text-muted-foreground">Exports</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="font-bold text-foreground">Priority</div>
                  <div className="text-sm text-muted-foreground">Processing</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="font-bold text-foreground">Grandfathered</div>
                  <div className="text-sm text-muted-foreground">Price Lock</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Monthly Plan</div>
                  <div className="text-sm text-muted-foreground">Next billing: March 15, 2024</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">$29.99</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1 rounded-2xl">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Update Payment
                </Button>
                <Button variant="outline" className="flex-1 rounded-2xl">
                  <Download className="h-4 w-4 mr-2" />
                  Download Invoice
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="rounded-2xl border-0 shadow-subtle">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Default Export Quality</div>
                  <div className="text-sm text-muted-foreground">Set your preferred output quality</div>
                </div>
                <Badge variant="outline" className="rounded-xl">1080p</Badge>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Auto-save Projects</div>
                  <div className="text-sm text-muted-foreground">Automatically save your work</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Hardware Acceleration</div>
                  <div className="text-sm text-muted-foreground">Use GPU for faster processing</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Watermark on Exports</div>
                  <div className="text-sm text-muted-foreground">Add OnlySpoofer watermark</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card className="rounded-2xl border-0 shadow-subtle">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Email Updates</div>
                  <div className="text-xs text-muted-foreground">Product news & updates</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Export Complete</div>
                  <div className="text-xs text-muted-foreground">Notify when rendering is done</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Weekly Reports</div>
                  <div className="text-xs text-muted-foreground">Usage statistics</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Usage Stats */}
          <Card className="rounded-2xl border-0 shadow-subtle">
            <CardHeader>
              <CardTitle className="text-lg">This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">147</div>
                <div className="text-sm text-muted-foreground">Videos Processed</div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Export Time Saved</span>
                  <span className="font-medium text-foreground">23.4 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Storage Used</span>
                  <span className="font-medium text-foreground">2.3 GB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Templates Used</span>
                  <span className="font-medium text-foreground">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="rounded-2xl border-0 shadow-subtle">
            <CardHeader>
              <CardTitle className="text-lg">Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start rounded-2xl">
                Help Center
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-2xl">
                Contact Support
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-2xl">
                Feature Requests
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}