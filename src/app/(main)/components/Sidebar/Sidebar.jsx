import React from 'react'
import Link from 'next/link';

function Sidebar() {
  return (
    <aside className="bg-black w-60 text-white sticky top-0 left-0 bottom-0 h-[100vh]">

        <div className="logo" >
          INVENTORY
        </div>

        <div className="links">
          <ul>
           <li><Link href="http://localhost:3000" className="Home
            ">Home</Link></li>

            <li><Link href="http://localhost:3000/Sales" className="Sales
            ">Sales</Link></li>

            <li><Link href="http://localhost:3000/product" className="Products
            ">Products</Link></li>
            
            
          </ul>
        </div>

    </aside>
    
    
  )
}

export default Sidebar;
