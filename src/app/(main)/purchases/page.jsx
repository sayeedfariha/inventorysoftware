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
      <label>Supplier ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="Text"
        placeholder="Supplier ID"
      />
     
      <label>Total amount</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Total Amount"
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
