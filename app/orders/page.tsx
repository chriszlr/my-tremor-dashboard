import CustomerTable from "@/components/OrderTable";
import Sidebar from "@/components/Sidebar";
import { Card } from "@tremor/react";

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
