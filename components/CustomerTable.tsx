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

const CustomerTable = () => {
  const [selectedMethod, setSelectedMethod] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const iscustomerSelected = (customer: SingleCustomer) =>
    (customer.method === selectedMethod || selectedMethod === "all") &&
    (selectedNames.includes(customer.name.first + " " + customer.name.last) ||
      selectedNames.length === 0);

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
            <Title>Customers</Title>
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
            placeholder="Select Customer"
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
            onValueChange={setSelectedMethod}
          >
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="PayPal">PayPal</SelectItem>
            <SelectItem value="Visa">Visa</SelectItem>
            <SelectItem value="MasterCard">MasterCard</SelectItem>
            <SelectItem value="Check">Check</SelectItem>
          </Select>
        </div>

        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">Email</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Last Order
              </TableHeaderCell>
              <TableHeaderCell className="text-right">Payment</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Customerdata.filter((item) => iscustomerSelected(item)).map(
              (item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.name.first} {item.name.last}
                  </TableCell>
                  <TableCell className="text-right">
                    {item.name.first.toLowerCase() + "@gmail.com"}
                  </TableCell>
                  <TableCell className="text-right">{item.date}</TableCell>
                  <TableCell className="text-right">{item.method}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerTable;
