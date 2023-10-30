import CustomerTable from "@/components/CustomerTable";
import Sidebar from "@/components/Sidebar";
import { Card, Metric } from "@tremor/react";

export default function Home() {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <Card>
        <CustomerTable />
      </Card>
    </main>
  );
}
