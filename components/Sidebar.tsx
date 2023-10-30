"use client";
import { Icon, Divider } from "@tremor/react";
import { HomeIcon, UserIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-min h-screen bg-slate-800 rounded-lg hidden md:block">
      <ul className="flex flex-col justify-center items-center p-4 space-y-3">
        <Link href="/" className="bg-slate-700 rounded-lg my-5">
          <Icon icon={HomeIcon} size="lg" />
        </Link>

        <Divider />

        <Link href="/customers" className="bg-slate-700 rounded-lg my-5">
          <Icon icon={UserIcon} size="lg" />
        </Link>

        <Link href="/orders" className="bg-slate-700 rounded-lg my-5">
          <Icon icon={CurrencyDollarIcon} size="lg" />
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
