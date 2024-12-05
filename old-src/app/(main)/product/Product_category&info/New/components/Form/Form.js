import React from "react";

function Form() {
  return (
    <div className="flex flex-col gap-2 w-1/4">
      <label>ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="ID"
      />
      <label>Product Name</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Product Name"
      />
      <label>Image</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="Image"
        placeholder="Image"
      />
      <label>Category</label>
      <select name="Category" id="" className="bg-neutral-300 p-2 text-lg rounded-md">
        <option value="Null">Null</option>
      </select>
      <label>Sub Category ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Sub Category ID"
      />
      <label>Brand ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Brand ID"
      />
      <label>Model ID</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Model ID"
      />
      <label>Product Price</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Product Price"
      />
      <label>Quantity</label>
      <input
        className="bg-neutral-300 p-2 text-lg rounded-md"
        type="text"
        placeholder="Quantity"
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
    </div>
  );
}

export default Form;
