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
    <Card className={cn(
      "transition-all duration-200 hover:shadow-md",
      variantStyles[variant]
    )}>
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="flex items-center justify-between text-sm sm:text-base font-medium">
          <span className="truncate pr-2">{title}</span>
          <Icon className={cn(
            "h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0",
            iconStyles[variant]
          )} />
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0 space-y-1 sm:space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">
            {value}
          </span>
        </div>

        {description && (
          <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
            {description}
          </p>
        )}

        {change && (
          <div className="pt-1">
            <Badge
              variant="outline"
              className={cn(
                "text-xs font-normal px-2 py-0.5 h-auto",
                changeStyles[changeType]
              )}
            >
              {change}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}