import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { StatusCard } from "@/components/dashboard/StatusCard"
import { AgentTable } from "@/components/dashboard/AgentTable"
import { PerformanceChart } from "@/components/dashboard/PerformanceChart"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { ToolUsageChart } from "@/components/dashboard/ToolUsageChart"
import { ExecutionTimeline } from "@/components/dashboard/ExecutionTimeline"
import { Bot, Activity, Clock, CheckCircle, AlertCircle } from "lucide-react"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <main className="flex-1 p-6 space-y-6">
            {/* Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatusCard
                title="Active Agents"
                value={12} 
                change="+2 from yesterday"
                changeType="increase"
                icon={Bot}
                variant="success"
                description="Currently running"
              />
              <StatusCard
                title="Plans Executing"
                value={8}
                change="+3 from last hour"
                changeType="increase" 
                icon={Activity}
                variant="default"
                description="In progress now"
              />
              <StatusCard
                title="Completed Today"
                value={47}
                change="+12% success rate"
                changeType="increase"
                icon={CheckCircle}
                variant="success"
                description="Plans finished"
              />
              <StatusCard
                title="Avg Execution Time"
                value="1.4s"
                change="-0.2s improvement"
                changeType="increase"
                icon={Clock}
                variant="warning"
                description="Per plan step"
              />
            </div>

            {/* Performance Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <PerformanceChart />
              <RecentActivity />
            </div>

            {/* Agent Management */}
            <AgentTable />

            {/* Tool Analytics and Execution Timeline */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <ToolUsageChart />
              </div>
              <ExecutionTimeline />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
