import Image from "next/image";
import { CreditCard, Activity, BarChart2, PieChart, Check, CheckCircle2, Link } from 'lucide-react';
import React from 'react';
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS}from "react-chartjs-2";
import { title } from "process";
import { color } from "chart.js/helpers";


export default function Dashboard() {
   const salesActivity =[
      {
       title:"To be Packed",
       Number:10,
       unit:"Qty",
       href: "http://localhost:3000/To_Be_packed", 
       color:"text-blue-600"
      },
      {
         title:"To be Shipped ",
         Number:0,
         unit:"Pkgs",
         href: "http://localhost:3000/To_Be_shipped", 
         color:"text-red-600"
        },
        {
         title:"To be Delivered ",
         Number:0,
         unit:"Pkgs",
         href: "http://localhost:3000/To_Be_delivered", 
         color:"text-green-600"
        },
   ];
   const inventorySummary=[{
      title:"Quantity in Hand",
      number:10,

   },
   {
      title:"Quantity to be recieved",
      number:0,

   },

   ]
       return (
          <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-50">
  
    
     <div className="bg-blue-50 border-b w-full borde-slate-300 p-12 h-40 sticky top-0 flex  items-center grid-cols-12">
      {/*sales ctivity*/}

      <div className="col-span-8  border-slate-300 p-8">
         <h2 className="font-serif text-sky-900">Sales Activity</h2>
         <div className=" p-1 grid grid-cols-4 gap-4">
            {/*card*/}
            {
               salesActivity.map((item,i)=>{
                  return(
                   
                   <a key={i} href={item.href}className="shadow rounded-lg border-slate-200  hover:border-blue-500 bg-white px-5 py-2 cursor-pointer flex items-center flex-col gap-1 transition-all duration-300">
               <h3 className={'font-semibold text-3xl ${item.color}'}>{item.Number}</h3>
               <small className="text-slate-500">{item.unit}</small>
               <div className="flex items-center space-x-2 text-slate-500">
                  <CheckCircle2 className="w-4 h-4"></CheckCircle2>
                  <span className="uppercase text-sm">{item.title} </span>
               </div>
            </a>  
                       

                  )


               }
               )
            }
           
            
         </div>
      </div>
      
      {/*Inventory Summary*/}
      <div className="col-span-4 p-8 ">
      <h2 className="font-serif text-sky-900">Inventory Summary</h2>
      <div className="">
         {
            inventorySummary.map((item,i)=>{
               return(
                  <div key={i} className="mb-4 shadow rounded-lg border-slate-200  hover:border-blue-500 bg-white py-1 px-5 cursor-pointer flex items-center  gap-3 justify-between transition-all duration-300">
      
           <h2 className="text-slate-500 text-sm uppercase">{item.title}</h2>
           <h2 className="text-2xl">{item.number}</h2>
               
         </div>
               )

            })
         }
      </div>
      </div>

      </div>
     </div>
   

  );
 }



