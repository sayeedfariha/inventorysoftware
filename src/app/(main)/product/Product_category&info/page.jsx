"use client";
import React from "react";
import { Plus } from "lucide-react";
import { List } from "lucide-react";
import Link from "next/link";
import { CircleHelp } from "lucide-react";
import Form from "./New/components/Form/Form";

export default function Items() {
  return (
    <div className="flex flex-col">
      <div className="sticky flex justify-between items-center bg-slate-50 py-5 px-4">
        <button className="text-2xl">All Items</button>
        <div className="flex">
          <div className="pr-2 border-r border-gray-300">
            <Link href="/product/Product_category&info/New" className="p-1 rounded-sm bg-blue-600 flex items-center space-x-2 px-4 text-slate-50 ">
              <Plus className="w-6 h-6 text-slate-50" />
              <span>Add</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center w-full h-28 px-4 bg-slate-100 rounded-xl">
        <div className="flex gap-16">
        <div className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 gap-8" />
          <div className="flex gap-10">
             <b>Product ID: </b>
             <b>Product Name</b>
             <b>Product Category</b>
          </div>
          
          <div className="flex gap-10">
            <button className="bg-slate-300 p-2 rounded-md">Edit</button>
            <button className="bg-slate-300 p-2 rounded-md">Delete</button>
          </div>
        </div>
      </div>
      
</div>
<div className="flex gap-4 p-6">
            <button className="bg-slate-300 p-2 rounded-md">Add More</button>
            <button className="bg-slate-300 p-2 rounded-md "> Save</button>
          </div>
</div>
    </div>
  );
}
