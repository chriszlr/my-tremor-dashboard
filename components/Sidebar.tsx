"use client";
import { Icon, Divider } from "@tremor/react";
import { HomeIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="w-min bg-slate-700 rounded-lg">
      <ul className="flex flex-col justify-center items-center p-2 space-y-3">
        <li>
          <Icon icon={HomeIcon} size="lg" color="indigo" />
        </li>

        <Divider />
        <li>
          <Icon icon={HomeIcon} size="lg" color="indigo" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
