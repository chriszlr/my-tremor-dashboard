"use client";
import { chartData } from "@/data/data";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";
import React from "react";

const valueFormatter = (number: number) =>
  `$${new Intl.NumberFormat("us").format(number).toString()}`;

const ChartComp = () => {
  return (
    <Card className="w-full md:w-2/3">
      <Title>Daily Revenue for the last 7 days.</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
        voluptate!
      </Subtitle>
      <BarChart
        className="mt-6 h-[50vh]"
        data={chartData}
        index="Day"
        categories={["Sales"]}
        colors={["blue"]}
        yAxisWidth={48}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};

export default ChartComp;
