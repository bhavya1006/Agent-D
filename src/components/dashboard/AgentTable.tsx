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
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <CardTitle className="text-lg sm:text-xl">Active Agents</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search agents or tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full text-sm"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Mobile Card View */}
        <div className="block sm:hidden">
          <div className="space-y-3 p-3">
            {filteredAgents.map((agent) => (
              <Card key={agent.id} className="p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm">{agent.name}</h3>
                  <Badge
                    variant="outline"
                    className={statusVariants[agent.status]}
                  >
                    {agent.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Last Run:</span>
                    <span>{agent.lastRun}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-medium">{agent.success_rate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plans:</span>
                    <span>{agent.plan_count}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
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

                  <div className="flex gap-2 pt-1">
                    <Button size="sm" className="flex-1 text-xs h-7">
                      <Play className="w-3 h-3 mr-1" />
                      Start
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs h-7">
                      <Pause className="w-3 h-3 mr-1" />
                      Pause
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b">
                  <TableHead className="font-medium">Agent Name</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">Last Run</TableHead>
                  <TableHead className="font-medium text-right">Success Rate</TableHead>
                  <TableHead className="font-medium">Tools</TableHead>
                  <TableHead className="font-medium text-right">Plans</TableHead>
                  <TableHead className="font-medium text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAgents.map((agent) => (
                  <TableRow key={agent.id} className="border-b">
                    <TableCell className="font-medium">{agent.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={statusVariants[agent.status]}
                      >
                        {agent.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {agent.lastRun}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-12 bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${agent.success_rate}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium min-w-[2.5rem]">
                          {agent.success_rate}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
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
                    <TableCell className="text-right font-medium">
                      {agent.plan_count}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          <Play className="w-3 h-3 mr-1" />
                          Start
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-40">
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
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}