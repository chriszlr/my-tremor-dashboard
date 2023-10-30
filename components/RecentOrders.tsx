"use client";
import { Card, Text, Icon, Flex, Subtitle } from "@tremor/react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { Customerdata } from "@/data/data";

const RecentOrders = () => {
  return (
    <Card className="w-full md:w-1/3 h-[70vh] overflow-scroll">
      <Text>Recent Orders</Text>

      <ul className="my-3">
        {Customerdata.map((item) => (
          <li key={item.id} className="my-4">
            <Card>
              <Flex alignItems="start" justifyContent="start">
                <Icon icon={UserCircleIcon} />
                <Flex>
                  <div className="mx-4">
                    <Text>
                      {item.name.first} {item.name.last}
                    </Text>
                    <Subtitle>$ {item.total}</Subtitle>
                  </div>
                  <p className="text-xs text-slate-500">{item.date}</p>
                </Flex>
              </Flex>
            </Card>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecentOrders;
