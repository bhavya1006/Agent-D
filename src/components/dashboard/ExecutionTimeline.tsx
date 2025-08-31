import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, AlertCircle, XCircle } from "lucide-react"

interface ExecutionStep {
  id: string
  name: string
  status: 'completed' | 'running' | 'pending' | 'failed'
  duration?: string
  startTime: string
  details?: string
  progress?: number
}

const executionSteps: ExecutionStep[] = [
  {
    id: "1",
    name: "Initialize Agent Configuration",
    status: "completed",
    duration: "0.5s",
    startTime: "10:30:15",
    details: "Loaded agent config and environment variables"
  },
  {
    id: "2", 
    name: "Authenticate with External Services",
    status: "completed",
    duration: "2.1s",
    startTime: "10:30:16",
    details: "Connected to 3 external APIs"
  },
  {
    id: "3",
    name: "Execute Data Collection Plan",
    status: "running",
    startTime: "10:30:18",
    details: "Processing batch 2 of 5",
    progress: 40
  },
  {
    id: "4",
    name: "Transform and Validate Data",
    status: "pending",
    startTime: "—"
  },
  {
    id: "5",
    name: "Generate Reports",
    status: "pending", 
    startTime: "—"
  },
  {
    id: "6",
    name: "Send Notifications",
    status: "pending",
    startTime: "—"
  }
]

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-success",
    bgColor: "bg-success/10 border-success/20",
    lineColor: "bg-success"
  },
  running: {
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10 border-primary/20",
    lineColor: "bg-primary"
  },
  pending: {
    icon: Clock,
    color: "text-muted-foreground",
    bgColor: "bg-muted border-border",
    lineColor: "bg-muted"
  },
  failed: {
    icon: XCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10 border-destructive/20",
    lineColor: "bg-destructive"
  }
}

export function ExecutionTimeline() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Plan Execution Timeline</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            Running: DataProcessor Plan #47
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-6">
            {executionSteps.map((step, index) => {
              const config = statusConfig[step.status]
              const StatusIcon = config.icon
              
              return (
                <div key={step.id} className="relative flex items-start gap-4">
                  {/* Timeline Node */}
                  <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 ${config.bgColor}`}>
                    <StatusIcon className={`h-5 w-5 ${config.color}`} />
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 min-w-0 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-foreground">{step.name}</h3>
                      {step.duration && (
                        <Badge variant="secondary" className="text-xs">
                          {step.duration}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>Started: {step.startTime}</span>
                      <Badge 
                        variant="outline" 
                        className={config.bgColor}
                      >
                        {step.status}
                      </Badge>
                    </div>
                    
                    {step.details && (
                      <p className="text-sm text-muted-foreground mb-3">{step.details}</p>
                    )}
                    
                    {step.progress !== undefined && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-foreground font-medium">{step.progress}%</span>
                        </div>
                        <Progress value={step.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}