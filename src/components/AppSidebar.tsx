import { 
  Library, 
  Scissors, 
  Layout, 
  Clock, 
  RefreshCw, 
  Search as SearchIcon, 
  Settings,
  Zap
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Library", url: "/", icon: Library },
  { title: "Editor", url: "/editor", icon: Scissors },
  { title: "Templates", url: "/templates", icon: Layout },
  { title: "Queue", url: "/queue", icon: Clock },
  { title: "Conversion", url: "/conversion", icon: RefreshCw },
  { title: "Detection", url: "/detection", icon: SearchIcon },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClasses = (active: boolean) =>
    active
      ? "bg-gradient-primary text-white font-medium shadow-secondary"
      : "hover:bg-accent/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"}>
      <SidebarContent className="pt-6">
        <div className="px-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            {!collapsed && (
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                OnlySpoofer
              </span>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`${getNavClasses(isActive(item.url))} transition-all duration-200 rounded-2xl mx-2 mb-1`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}