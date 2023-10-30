import ChartComp from "@/components/ChartComp";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { Card, Metric } from "@tremor/react";

export default function Home() {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <Card>
        <Metric>Dashboard</Metric>

        <Widgets />

        <ChartComp />
      </Card>
    </main>
  );
}
