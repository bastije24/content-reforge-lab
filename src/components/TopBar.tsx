import { Search, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopBar() {
  return (
    <header className="h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="h-8 w-8" />
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects, templates, or files..."
            className="pl-10 bg-muted/50 border-0 rounded-2xl focus-visible:ring-brand-primary"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button className="bg-gradient-primary hover:opacity-90 text-white rounded-2xl px-6 shadow-secondary">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
        
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-gradient-secondary text-white">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}