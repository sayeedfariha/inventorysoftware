import React from 'react'
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import {ChevronLeft } from 'lucide-react';
import {Home } from 'lucide-react';
import {TrendingUp } from 'lucide-react';
import {Package } from 'lucide-react';
import {ClipboardList } from 'lucide-react';
import {BarChart } from 'lucide-react';
import { Tag } from 'lucide-react';
import {ChevronRight } from 'lucide-react';
import { Plus } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { Scale } from 'lucide-react';
import { FileClock } from 'lucide-react';


import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"



function Sidebar() {
  
  return (
    <aside className="bg-slate-700 w-60 text-white sticky top-0 left-0 bottom-0 h-[100vh] justify-between  ">
      {/*top part*/}
       
       <div className= "flex flex-col">

       </div>
       {/*logo*/}
       <div className= "bg-slate-800 flex space-x-2 items-center py-3 px-2">
       <ShoppingCart />
       <span className="font-semibold text-xl" >Inventory</span>


       </div>

        {/*links*/}
        <div className="  links ">
          <ul className="flex flex-col space-y-2 px-3 py-6 gap-2">
           <li><Link href="http://localhost:3000" className="Home flex items-center cursor-pointer hover:bg-slate-800 rounded-md gap-4 p-3  ">
            <Home className="w-6 h-6 mr-2 " />
            <span>Home</span>

            </Link></li>
            

            <li><Link href="http://localhost:3000/Sales" className="Sales flex items-center cursor-pointer hover:bg-slate-800 rounded-md gap-4 p-3
            " > <TrendingUp className="w-6 h-6 mr-2" />   <span>Sales</span>
            </Link></li>

            {/* <li><Link href="http://localhost:3000/product" className="Products flex items-center hover:underline gap-4 p-3
            "><Package className="w-6 h-6 mr-2" />
              <span>Products</span></Link></li> */}
              
              <Collapsible>
             <CollapsibleTrigger className="flex items-center gap-2 p-3 cursor-pointer hover:bg-slate-800 rounded-md"><Package className=" w-6 h-6 mr-2" />
             <span>Products</span>
             <ChevronRight /></CollapsibleTrigger>
                <CollapsibleContent>
                <div className='flex items-center justify-between px-3'>
                <Link href="http://localhost:3000/product/items" className=" flex items-center  gap-4 p-3 justify-between px-3 hover:bg-slate-800 rounded-md
            "><span >Items</span>
            <ShoppingCart />
            
            </Link>
         </div>
         <div className='flex items-center justify-between px-3'>
                <Link href="http://localhost:3000/product/AddItems" className=" flex items-center  gap-4 p-3 justify-between px-3 hover:bg-slate-800 rounded-md
            "><span >Add Items</span>
            <Plus />
            </Link>
         </div>
                  
          </CollapsibleContent>
            </Collapsible>

        

            <li><Link href="http://localhost:3000/purchases" className="Purchases flex items-center cursor-pointer hover:bg-slate-800 rounded-md gap-4 p-3
            "><ClipboardList className="w-6 h-6 mr-2 " />
              <span>Purchases</span>
              </Link></li>
              
              <li><Link href="http://localhost:3000/brand" className="brand flex items-center cursor-pointer hover:bg-slate-800 rounded-md gap-4 p-3
            "><Tag className="w-6 h-6 mr-2" />
              <span>Brands</span>
              </Link></li>


              <Collapsible>
             <CollapsibleTrigger className="flex items-center gap-2 p-3 Report  cursor-pointer hover:bg-slate-800 rounded-md ">
             <BarChart className="w-6 h-6 mr-2" />
             <span>Report</span>
             <ChevronRight />
             
            </CollapsibleTrigger>
                <CollapsibleContent>
                <div className='flex items-center justify-between px-3'>
                <Link href="http://localhost:3000/Report/payment" className=" flex items-center  gap-4 p-3 justify-between px-3 hover:bg-slate-800 rounded-md
            "><span >Payment</span>
            <CreditCard />
            
            </Link>
         </div>
         <div className='flex items-center justify-between px-3'>
                <Link href="http://localhost:3000/Report/balancesheet" className=" flex items-center  gap-4 p-3 justify-between px-3 hover:bg-slate-800 rounded-md
            "><span >Balance Sheet</span>
            <Scale />
            </Link>
         </div>
         <div className='flex items-center justify-between px-3'>
                <Link href="http://localhost:3000/Report/transactionHistory" className=" flex items-center  gap-4 p-3 justify-between px-3 hover:bg-slate-800 rounded-md
            "><span >Transaction History</span>
            <FileClock />
            </Link>
         </div>
                  
          </CollapsibleContent>
            </Collapsible>

             
      
            
            
          </ul>
        </div>
        


         {/*bottom*/}
         <div className="flex flex-col justify-end"> </div>
         <div className= " flex space-x-2 items-center py-3 px-2">
         

         </div>

          {/*footer*/}

        

       

    </aside>
    
    
  )
}

export default Sidebar;
