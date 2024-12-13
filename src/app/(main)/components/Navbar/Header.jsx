import React from "react";
import { createIcons, icons } from "lucide";
import { History } from "lucide-react";
import { Plus } from "lucide-react";
import { Bell } from "lucide-react";
import { Settings } from "lucide-react";
import { User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 bg-slate-100 w-full h-16 flex items-center justify-between px-4 border-b border-slate-200 z-[1000]">
      <SidebarTrigger />

      <div className="relative">
        <div className="flex items-center gap-2">
          {/* Notification Button */}
          <button className="p-2 rounded hover:bg-blue-200 transition">
            <Bell className="w-6 h-6 text-blue-600" /> {/* Notification Icon */}
          </button>
          <button className="p-2 rounded hover:bg-blue-200 transition">
            <Settings className="w-6 h-6 text-blue-600" /> {/* Settings Icon */}
          </button>
          <button
            data-tooltip-target="tooltip-bottom"
            data-tooltip-placement="bottom"
            type="button"
            className="p-1 ml-2 rounded hover:bg-blue-200 transition bg-blue-600">
            <Plus className="w-6 h-6 text-white"  />
          </button>

          <div
            id="tooltip-bottom"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-cyan-700 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip on bottom
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </header>
  );
}
