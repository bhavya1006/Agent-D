import { useState } from "react"
import {
  Bot,
  Home,
  Activity,
  Settings,
  BarChart3,
  Clock,
  Users,
  Shield,
  ChevronDown,
  Zap,
  Menu,
  X
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Agents", url: "/agents", icon: Bot },
  { title: "Plan Execution", url: "/plans", icon: Activity },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Tools", url: "/tools", icon: Zap },
]

const managementItems = [
  { title: "Activity Log", url: "/activity", icon: Clock },
  { title: "Team", url: "/team", icon: Users },
  { title: "Security", url: "/security", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-sidebar-accent ${isActive
      ? "bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-border"
      : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
    }`

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2 p-3 sm:p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
          <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <h1 className="text-base sm:text-lg font-bold text-sidebar-foreground">
              Agent D
            </h1>
            <p className="text-xs text-sidebar-foreground/60">
              AI Agent Hub
            </p>
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <SidebarGroup className="flex-1">
        {!collapsed && <SidebarGroupLabel className="px-3 text-xs font-medium text-sidebar-foreground/60">Main</SidebarGroupLabel>}
        <SidebarGroupContent>
          <SidebarMenu className="space-y-1 px-2">
            {mainItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.url}
                    className={getNavCls}
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {!collapsed && <span className="truncate">{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {/* Management */}
      <SidebarGroup>
        {!collapsed && <SidebarGroupLabel className="px-3 text-xs font-medium text-sidebar-foreground/60">Management</SidebarGroupLabel>}
        <SidebarGroupContent>
          <SidebarMenu className="space-y-1 px-2">
            {managementItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.url}
                    className={getNavCls}
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {!collapsed && <span className="truncate">{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex border-r border-sidebar-border">
        <SidebarContent />
      </Sidebar>

      {/* Mobile Sidebar Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-64 p-0 md:hidden">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}

// Mobile Sidebar Trigger Component (to be used in DashboardHeader)
export function MobileSidebarTrigger() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <AppSidebar />
      </SheetContent>
    </Sheet>
  )
}