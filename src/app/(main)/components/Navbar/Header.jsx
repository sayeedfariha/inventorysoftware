import React from 'react'
import { createIcons, icons } from 'lucide';
import { History } from 'lucide-react';
import { Plus } from 'lucide-react';
import {Bell } from 'lucide-react';
import { Settings} from 'lucide-react';
import { User} from 'lucide-react';

export default function Header() {
  return (
    <header className ="bg-slate-200 w-full h-16 sticky top-0  bg-pink-500 flex items-center px-4 border-b border-slate-200 shadow">
      <div className='flex'>
        {/*recent activities*/}
        <button> <History className='w-6 h-6 ' />
         </button>
      {/*search*/}
      </div>
      <div className="flex-1"></div> 
      
      <div className="relative">
        <div>
        <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" 
        className="ms-3 mb-2 md:mb-0 text-white bg-slate-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
          <Plus />
        </button>
         {/* Notification Button */}
         <button className="p-2 rounded hover:bg-pink-400 transition">
          <Bell className="w-6 h-6 text-cyan-700" /> {/* Notification Icon */}
        </button>
        <button className="p-2 rounded hover:bg-pink-400 transition">
          <Settings className="w-6 h-6 text-cyan-700" /> {/* Settings Icon */}
        </button>
        
        

     <div id="tooltip-bottom" 
     role="tooltip" 
     className="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium text-cyan-700 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on bottom
     <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
          
        </div>

      </div>
       
      
      
    </header>
  )
}

