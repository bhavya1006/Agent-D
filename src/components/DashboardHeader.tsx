import { Bell, Settings, User, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-3 sm:px-6 gap-2 sm:gap-4">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />

        <div className="flex-1 flex items-center gap-2 md:gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-muted/50 border-border"
            />
          </div>

          {/* Quick Filters - Hidden on mobile */}
          <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
            <Filter className="w-4 h-4" />
            <span className="hidden md:inline">Filters</span>
          </Button>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <div className="text-sm">Agent "DataProcessor" completed successfully</div>
                  <div className="text-xs text-muted-foreground">2 minutes ago</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-warning">Plan execution delayed</div>
                  <div className="text-xs text-muted-foreground">5 minutes ago</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-destructive">Authentication failed for "WebScraper"</div>
                  <div className="text-xs text-muted-foreground">10 minutes ago</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings - Hidden on mobile */}
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Settings className="w-4 h-4" />
          </Button>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="User" />
                  <AvatarFallback className="bg-primary text-primary-foreground">NX</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Nixtio</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@mindgrid.ai
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                Team Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}