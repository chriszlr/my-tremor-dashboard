import Sidebar from "@/components/Sidebar";
import { Card, Metric, Text } from "@tremor/react";
import React from "react";

const page = () => {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <Card>
        <Metric>Customers</Metric>
      </Card>
    </main>
  );
};

export default page;
