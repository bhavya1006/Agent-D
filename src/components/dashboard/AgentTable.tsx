import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Play, Pause, Settings, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Agent {
  id: string
  name: string
  status: 'active' | 'paused' | 'error' | 'completed'
  lastRun: string
  success_rate: number
  tools: string[]
  plan_count: number
}

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "DataProcessor",
    status: "active",
    lastRun: "2 minutes ago",
    success_rate: 95,
    tools: ["Web Scraper", "CSV Parser"],
    plan_count: 12
  },
  {
    id: "2", 
    name: "WebAnalyzer",
    status: "completed",
    lastRun: "1 hour ago",
    success_rate: 87,
    tools: ["Selenium", "BeautifulSoup"],
    plan_count: 8
  },
  {
    id: "3",
    name: "EmailBot",
    status: "error",
    lastRun: "3 hours ago", 
    success_rate: 72,
    tools: ["SMTP", "Template Engine"],
    plan_count: 15
  },
  {
    id: "4",
    name: "ReportGenerator",
    status: "paused",
    lastRun: "1 day ago",
    success_rate: 91,
    tools: ["PDF Creator", "Chart Generator"],
    plan_count: 6
  }
]

const statusVariants = {
  active: "bg-success/10 text-success border-success/20",
  completed: "bg-primary/10 text-primary border-primary/20", 
  paused: "bg-warning/10 text-warning border-warning/20",
  error: "bg-destructive/10 text-destructive border-destructive/20"
}

export function AgentTable() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const filteredAgents = mockAgents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.tools.some(tool => tool.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Active Agents</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead>Success Rate</TableHead>
              <TableHead>Tools</TableHead>
              <TableHead>Plans</TableHead>
              <TableHead className="w-[70px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAgents.map((agent) => (
              <TableRow key={agent.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{agent.name}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={statusVariants[agent.status]}
                  >
                    {agent.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{agent.lastRun}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-success rounded-full transition-all"
                        style={{ width: `${agent.success_rate}%` }}
                      />
                    </div>
                    <span className="text-sm">{agent.success_rate}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    {agent.tools.slice(0, 2).map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {agent.tools.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{agent.tools.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{agent.plan_count}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Play className="mr-2 h-4 w-4" />
                        Start
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pause className="mr-2 h-4 w-4" />
                        Pause
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Configure
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}