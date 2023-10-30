"use client";
import { useState } from "react";
import {
  Badge,
  Flex,
  Title,
  Icon,
  MultiSelect,
  MultiSelectItem,
  Select,
  SelectItem,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { Customerdata, SingleCustomer } from "@/data/data";

const OrderTable = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const iscustomerSelected = (customer: SingleCustomer) =>
    (customer.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(customer.name.first) || selectedNames.length === 0);

  return (
    <div>
      <Title className="my-2">Table</Title>
      <div>
        <div>
          <Flex
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Order History</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows lastest customers"
            />
          </Flex>
        </div>
        <div className="flex space-x-2">
          <MultiSelect
            className="max-w-full sm:max-w-xs"
            onValueChange={setSelectedNames}
            placeholder="Select Order"
          >
            {Customerdata.map((item) => (
              <MultiSelectItem
                key={item.id}
                value={`${item.name.first} ${item.name.last}`}
              >
                {item.name.first} {item.name.last}
              </MultiSelectItem>
            ))}
          </MultiSelect>
          <Select
            className="max-w-full sm:max-w-xs"
            defaultValue="all"
            onValueChange={setSelectedStatus}
          >
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Processing">Processing</SelectItem>
            <SelectItem value="On Hold">On Hold</SelectItem>
          </Select>
        </div>

        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">Total</TableHeaderCell>
              <TableHeaderCell className="text-right">Payment</TableHeaderCell>
              <TableHeaderCell className="text-right">Status</TableHeaderCell>
              <TableHeaderCell className="text-right">Date</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Customerdata.filter((item) => iscustomerSelected(item)).map(
              (item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.name.first} {item.name.last}
                  </TableCell>
                  <TableCell className="text-right">${item.total}</TableCell>
                  <TableCell className="text-right">{item.method}</TableCell>
                  <TableCell className="text-right">
                    {item.status === "On Hold" ? (
                      <Badge color={"amber"}>{item.status}</Badge>
                    ) : item.status === "Completed" ? (
                      <Badge color={"emerald"}>{item.status}</Badge>
                    ) : item.status === "Processing" ? (
                      <Badge color={"sky"}>{item.status}</Badge>
                    ) : null}
                  </TableCell>
                  <TableCell className="text-right">{item.date}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
