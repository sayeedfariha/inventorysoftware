import React from 'react'
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import {ChevronLeft } from 'lucide-react';


function Sidebar() {
  return (
    <aside className="bg-slate-700 w-60 text-white sticky top-0 left-0 bottom-0 h-[100vh] justify-between  ">
      {/*top part*/}
       
       <div className= "flex flex-col">

       </div>
       {/*logo*/}
       <div className= "bg-slate-800 flex space-x-2 items-center py-3 px-2">
       <ShoppingCart />
       <span className="font-semiboldbold text-xl" >Inventory</span>


       </div>

        {/*links*/}
        <div className="links">
          <ul>
           <li><Link href="http://localhost:3000" className="Home
            ">Home</Link></li>

            <li><Link href="http://localhost:3000/Sales" className="Sales
            ">Sales</Link></li>

            <li><Link href="http://localhost:3000/product" className="Products
            ">Products</Link></li>

            <li><Link href="http://localhost:3000/purchases" className="Purchases
            ">Purchases</Link></li>

            <li><Link href="http://localhost:3000/Report" className="Report
            ">Report</Link></li>
            
            
          </ul>
        </div>
        


         {/*bottom*/}
         <div className="flex flex-col justify-end"> </div>
         <div className= "bg-slate-800 flex space-x-2 items-center py-3 px-2">
         <ChevronLeft />

         </div>

          {/*footer*/}

        

       

    </aside>
    
    
  )
}

export default Sidebar;
