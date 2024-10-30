import React from 'react'
import { Plus } from 'lucide-react';
import { List } from 'lucide-react';
import Link from 'next/link';



export default function Items() {
  return (
    <div className='flex justify-between items-center bg-slate-50 py-5 px-4'>
      <button className='text-2xl'>All Items</button>
      <div className='flex'>
        <div className='pr-2 border-r border-gray-300'>
          <button
          
           className='p-1 rounded-sm bg-blue-600 flex items-center space-x-2 px-6 text-slate-50 '>
          <Plus className="w-6 h-6 text-slate-50" />
          <span>New</span>
            
          </button>
       </div>
     
        {/*layout*/}
        <div className='flex'>
          <button>
          <List />
      </button>
        </div>
        {/*more*/}
        {/*help*/}
      </div>
    </div>
  )
}
