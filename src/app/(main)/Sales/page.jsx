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
      <label>Invoice ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Invoice ID"
      />
      <label>Customer Name</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="Text"
        placeholder="Customer Name"
      />
     
      <label>Customer Email</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Customer Email"
      />
      <label>Discount</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Discount"
      />
      <label>Due</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Due"
      />
      <label>Customer Mobile</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Customer Mobile"
      />
      
      <label></label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Created by"
      />
      <label></label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Created Date"
      />
      <label></label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Modified by"
      />
      <label></label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Modified Date"
      />
      <button className="bg-slate-400 p-2 w-20 rounded-md">Save</button>
    </div>
  );
}

export default Form;
