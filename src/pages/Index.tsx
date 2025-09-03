// index.tsx

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
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col w-full min-w-0">
          <DashboardHeader />
          <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 overflow-auto">
            {/* Status Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <StatusCard
                title="Active Agents"
                value="12"
                change="+2 from yesterday"
                changeType="increase"
                icon={Bot}
                variant="success"
                description="Currently running"
              />
              <StatusCard
                title="Tasks Completed"
                value="1,247"
                change="+15% this week"
                changeType="increase"
                icon={CheckCircle}
                variant="default"
                description="Successfully executed"
              />
              <StatusCard
                title="Avg Response Time"
                value="1.2s"
                change="-0.3s improvement"
                changeType="increase"
                icon={Clock}
                variant="success"
                description="System performance"
              />
              <StatusCard
                title="Error Rate"
                value="2.1%"
                change="+0.5% from last week"
                changeType="decrease"
                icon={AlertCircle}
                variant="warning"
                description="Needs attention"
              />
            </div>

            {/* Performance Chart */}
            <div className="w-full">
              <PerformanceChart />
            </div>

            {/* AgentTable and RecentActivity balanced for desktop */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full min-w-0 xl:col-span-2">
                <AgentTable />
              </div>
              <div className="w-full min-w-0 xl:col-span-1">
                <RecentActivity />
              </div>
            </div>

            {/* ToolUsageChart and ExecutionTimeline balanced for desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full min-w-0 lg:col-span-2">
                <ToolUsageChart />
              </div>
              <div className="w-full min-w-0 lg:col-span-1">
                <ExecutionTimeline />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
