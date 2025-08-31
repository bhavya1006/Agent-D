import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatusCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'increase' | 'decrease' | 'neutral'
  icon: LucideIcon
  variant?: 'default' | 'success' | 'warning' | 'destructive'
  description?: string
}

export function StatusCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon, 
  variant = 'default',
  description 
}: StatusCardProps) {
  const variantStyles = {
    default: "border-border bg-card",
    success: "border-success/20 bg-success/5",
    warning: "border-warning/20 bg-warning/5", 
    destructive: "border-destructive/20 bg-destructive/5"
  }

  const iconStyles = {
    default: "text-muted-foreground",
    success: "text-success",
    warning: "text-warning",
    destructive: "text-destructive"
  }

  const changeStyles = {
    increase: "text-success bg-success/10",
    decrease: "text-destructive bg-destructive/10",
    neutral: "text-muted-foreground bg-muted"
  }

  return (
    <Card className={cn("shadow-card hover:shadow-elevated transition-all duration-300", variantStyles[variant])}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("h-4 w-4", iconStyles[variant])} />
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold text-card-foreground">{value}</div>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          {change && (
            <Badge 
              variant="secondary" 
              className={cn("text-xs", changeStyles[changeType])}
            >
              {change}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}