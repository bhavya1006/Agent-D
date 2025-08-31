import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const performanceData = [
  { time: "00:00", success_rate: 92, execution_time: 1.2, token_usage: 1500 },
  { time: "04:00", success_rate: 89, execution_time: 1.8, token_usage: 1800 },
  { time: "08:00", success_rate: 95, execution_time: 1.1, token_usage: 1400 },
  { time: "12:00", success_rate: 88, execution_time: 2.1, token_usage: 2100 },
  { time: "16:00", success_rate: 93, execution_time: 1.5, token_usage: 1650 },
  { time: "20:00", success_rate: 91, execution_time: 1.7, token_usage: 1750 },
  { time: "23:59", success_rate: 94, execution_time: 1.3, token_usage: 1550 }
]

export function PerformanceChart() {
  return (
    <Card className="shadow-card col-span-2">
      <CardHeader>
        <CardTitle>Agent Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis 
                dataKey="time" 
                className="text-muted-foreground"
                fontSize={12}
              />
              <YAxis 
                className="text-muted-foreground"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--popover-foreground))'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="success_rate" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="Success Rate (%)"
                dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="execution_time" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Avg Execution Time (s)"
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="token_usage" 
                stroke="hsl(var(--warning))" 
                strokeWidth={2}
                name="Token Usage"
                dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                yAxisId="right"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}