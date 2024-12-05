import React from 'react'
function Form() {
  return (
    <div className="flex flex-col gap-2 w-1/4  justify-center p-6">
      <label>ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="ID"
      />
      
      <label> Name</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="Text"
        placeholder="Customer Name"
      />
     
      <label>Address</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Address"
      />
      <label>Email</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Email"
      />
      
      <label> Mobile</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder=" Mobile"
      />
      
      
      <button className="bg-slate-400 p-2 w-20 rounded-md">Save</button>
    </div>
  );
}

export default Form;

