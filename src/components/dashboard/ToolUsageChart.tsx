import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts"

const toolUsageData = [
  { name: "Web Scraper", usage: 45, color: "hsl(var(--primary))" },
  { name: "CSV Parser", usage: 32, color: "hsl(var(--success))" },
  { name: "PDF Creator", usage: 28, color: "hsl(var(--warning))" },
  { name: "SMTP", usage: 22, color: "hsl(var(--destructive))" },
  { name: "Template Engine", usage: 18, color: "hsl(var(--secondary))" },
  { name: "Chart Generator", usage: 15, color: "hsl(var(--accent))" }
]

const toolFrequencyData = [
  { tool: "Web Scraper", frequency: 145 },
  { tool: "CSV Parser", frequency: 132 },
  { tool: "PDF Creator", frequency: 98 },
  { tool: "SMTP", frequency: 87 },
  { tool: "Template", frequency: 65 },
  { tool: "Charts", frequency: 54 }
]

export function ToolUsageChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Tool Usage Distribution */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Tool Usage Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={toolUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="usage"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                  fontSize={12}
                  fill="hsl(var(--primary))"
                >
                  {toolUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Tool Execution Frequency */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Tool Execution Frequency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={toolFrequencyData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis 
                  type="number"
                  className="text-muted-foreground"
                  fontSize={12}
                />
                <YAxis 
                  type="category"
                  dataKey="tool"
                  className="text-muted-foreground"
                  fontSize={12}
                  width={80}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                />
                <Bar 
                  dataKey="frequency" 
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}