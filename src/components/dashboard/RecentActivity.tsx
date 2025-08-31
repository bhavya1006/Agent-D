import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, XCircle, AlertCircle, Play } from "lucide-react"

interface Activity {
  id: string
  agent: string
  action: string
  status: 'success' | 'error' | 'warning' | 'running'
  timestamp: string
  details?: string
}

const recentActivities: Activity[] = [
  {
    id: "1",
    agent: "DataProcessor",
    action: "Plan execution completed",
    status: "success",
    timestamp: "2 minutes ago",
    details: "Processed 1,247 records"
  },
  {
    id: "2", 
    agent: "WebAnalyzer",
    action: "Authentication renewed",
    status: "success",
    timestamp: "5 minutes ago"
  },
  {
    id: "3",
    agent: "EmailBot",
    action: "SMTP connection failed",
    status: "error", 
    timestamp: "8 minutes ago",
    details: "Connection timeout after 30s"
  },
  {
    id: "4",
    agent: "ReportGenerator",
    action: "Plan execution started",
    status: "running",
    timestamp: "12 minutes ago"
  },
  {
    id: "5",
    agent: "DataProcessor",
    action: "Rate limit warning",
    status: "warning",
    timestamp: "15 minutes ago",
    details: "Approaching API limit"
  },
  {
    id: "6",
    agent: "WebAnalyzer",
    action: "Tool updated",
    status: "success",
    timestamp: "1 hour ago",
    details: "BeautifulSoup v4.12.0"
  }
]

const statusConfig = {
  success: {
    icon: CheckCircle,
    variant: "bg-success/10 text-success border-success/20" as const,
  },
  error: {
    icon: XCircle,
    variant: "bg-destructive/10 text-destructive border-destructive/20" as const,
  },
  warning: {
    icon: AlertCircle,
    variant: "bg-warning/10 text-warning border-warning/20" as const,
  },
  running: {
    icon: Play,
    variant: "bg-primary/10 text-primary border-primary/20" as const,
  }
}

export function RecentActivity() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-muted-foreground" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const StatusIcon = statusConfig[activity.status].icon
            
            return (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 mt-0.5">
                  <StatusIcon className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{activity.agent}</span>
                    <Badge 
                      variant="outline" 
                      className={statusConfig[activity.status].variant}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-foreground mb-1">{activity.action}</p>
                  
                  {activity.details && (
                    <p className="text-xs text-muted-foreground mb-2">{activity.details}</p>
                  )}
                  
                  <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}