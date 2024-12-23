import React from 'react'

 
function Form() {
  return (
    <div className="flex flex-col">
    <div className="sticky flex justify-between items-center bg-slate-50 py-5 px-4">
    <button className="text-2xl text-slate-600">Admin Panel</button>
    <div className="ml-4">
          <select className="bg-slate-100 border border-gray-300 p-2 rounded-md text-slate-600">
            <option value="user-role">User Role</option>
            <option value="users">Null</option>
          </select>
        </div>
      </div>

        
    <div className="flex flex-col gap-2 w-1/4  justify-center p-6">
      <label>ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="ID"
      />
      <label>Name</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Name"
      />
      <label>Mobile</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="Text"
        placeholder="Mobile"
      />
     
      <label>Email</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Email"
      />
      <label>Password</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Password"
      />
      
      <button className="bg-slate-400 p-2 w-20 rounded-md">Save</button>
    </div>
  </div>
    
  );
}

export default Form;
