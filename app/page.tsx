import ChartComp from "@/components/ChartComp";
import RecentOrders from "@/components/RecentOrders";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { Card, Flex, Metric } from "@tremor/react";

export default function Home() {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <Card>
        <Metric>Dashboard</Metric>

        <Widgets />

        <div className="flex flex-col md:flex-row gap-5">
          <ChartComp />
          <RecentOrders />
        </div>
      </Card>
    </main>
  );
}
