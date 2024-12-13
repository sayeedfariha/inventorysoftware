"use client";
import Image from "next/image";
import {
  CreditCard,
  Activity,
  BarChart2,
  PieChart,
  Check,
  CheckCircle2,
  Link,
} from "lucide-react";
import React from "react";
import { Bar as ChartJSBar } from "react-chartjs-2";
import { Chart as ChartJS } from "react-chartjs-2";
import { title } from "process";
import { color } from "chart.js/helpers";
import { TrendingUp } from "lucide-react";
import { Bar as RechartsBar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { week: "Week 1", sales: 500, revenue: 700 },
  { week: "Week 2", sales: 400, revenue: 600 },
  { week: "Week 3", sales: 600, revenue: 800 },
  { week: "Week 4", sales: 700, revenue: 900 },
];
export default function Dashboard() {
  const salesActivity = [
    {
      title: "To be Packed",
      Number: 10,
      unit: "Qty",
      href: "http://localhost:3000/To_Be_packed",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped ",
      Number: 0,
      unit: "Pkgs",
      href: "http://localhost:3000/To_Be_shipped",
      color: "text-red-600",
    },
    {
      title: "To be Delivered ",
      Number: 0,
      unit: "Pkgs",
      href: "http://localhost:3000/To_Be_delivered",
      color: "text-green-600",
    },
  ];
  const inventorySummary = [
    {
      title: "Quantity in Hand",
      number: 10,
    },
    {
      title: "Quantity to be recieved",
      number: 0,
    },
  ];
  return (
    <main className="w-full flex flex-col px-8 py-2 items-center justify-items-center min-h-screen gap-2 bg-slate-50">
      <div className="w-full borde-slate-300 flex items-start">

        {/*sales ctivity*/}
        <div className="flex flex-col gap-3 border-slate-300 p-8">
          <h2 className="font-bold text-2xl text-blue-600">Sales Activity</h2>
          <div className="flex gap-4">
            {/*card*/}
            {salesActivity.map((item, i) => {
              return (
                <a
                  key={i}
                  href={item.href}
                  className="w-60 h-auto shadow rounded-lg border-slate-200 hover:border-blue-500 bg-white cursor-pointer flex items-start flex-col gap-4 p-5 transition-all duration-300"
                >
                  <div className="flex items-start gap-2 text-sm text-blue-600 font-bold">
                    <CheckCircle2 className="w-4 h-4"></CheckCircle2>
                    <span className="uppercase">{item.title} </span>
                  </div>
                  <div className="w-full flex items-end justify-between">
                    <h3 className={"ml-1 font-semibold text-5xl ${item.color}"}>
                    {item.Number}
                    </h3>
                    <small className="text-xl text-slate-500">{item.unit}</small>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/*Inventory Summary*/}
        <div className="flex flex-col gap-3 border-slate-300 p-8">
          <h2 className="font-bold text-2xl text-blue-600">Inventory Summary</h2>
          <div className="">
            {inventorySummary.map((item, i) => {
              return (
                <div
                  key={i}
                  className="mb-4 shadow rounded-lg border-slate-200  hover:border-blue-500 bg-white px-4 py-2 cursor-pointer flex items-center  gap-10 justify-between transition-all duration-300"
                >
                  <h2 className="text-slate-500 text-sm uppercase">
                    {item.title}
                  </h2>
                  <h2 className="text-2xl">{item.number}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-[200px] w-full ">
        <h1 className="font-semibold">Profit this week </h1>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          className="bg-gray-100"
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="week"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          tickFormatter={(value) => value.slice(0, 3)}
          <RechartsBar dataKey="sales" fill="var(--color-sales)" radius={4} />
          <RechartsBar
            dataKey="revenue"
            fill="var(--color-revenue)"
            radius={4}
          />
        </BarChart>
      </div>
    </main>
  );
}
