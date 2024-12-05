import React from 'react'

function page() {
  return (
    <div className='bg-slate-10
      w-full h-[100vh]'>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center w-full h-28 px-4 bg-slate-100 rounded-xl">
          <div className="flex gap-16">
          <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 gap-4" />
             <b>ID</b>
             </div>
             <b>Product Category ID</b>
             <b>Product Category Name</b>
             <b>Note</b>
             <b>Created By</b>
             <b>Created Date</b>
             <b>Modified By</b>
             <b>Modified Date</b>

          </div>
          
          <div className="flex gap-4">
            <button className="bg-slate-300 p-2 rounded-md">Edit</button>
            <button className="bg-slate-300 p-2 rounded-md">Delete</button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-6">
            <button className="bg-slate-300 p-2 rounded-md">Add More</button>
            <button className="bg-slate-300 p-2 rounded-md "> Save</button>
          </div>
    </div>
  )
}

export default page

