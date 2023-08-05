// import React from "react";

import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();

  //  updating a user from mongoDB altas
  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,
      email,
    };

    fetch(`http://localhost:3000/users/${loaderData._id}`, {
      method: "PUT", // update
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully");
          navigate("/users");
        }
      });
  };

  return (
    <div className="flex flex-col w-full justify-start items-center gap-5 mt-6 basis-1">
      <h1 className="text-4xl font-bold text-green-500">
        Update User {loaderData.name}
      </h1>
      <form
        onSubmit={handleFormOnSubmit}
        className="bg-green-300 flex flex-col justify-center items-center gap-4 w-[400px] mx-auto py-8 px-5"
      >
        <input
          className=" p-4"
          type="text"
          name="name"
          defaultValue={loaderData?.name}
          placeholder="Enter Your Name"
          required
        />
        <input
          className=" p-4"
          type="text"
          name="email"
          defaultValue={loaderData?.email}
          placeholder="Enter Your Email"
          required
        />
        <input
          className="bg-red-500 hover:bg-red-700 p-2 text-white font-semibold duration-500"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
