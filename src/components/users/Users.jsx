// import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  //  getting all user form mongoDB altas
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  //  adding  a user into mongoDB altas
  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,
      email,
    };

    fetch("http://localhost:3000/users", {
      method: "POST", // method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    form.reset();
  };

  //  deleting  a user from mongoDB altas
  const handleDelteUser = (id) => {
    console.log("delete - ", id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE", // method
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount == 1) {
          alert("User Deleted Successfully");
        }
      });
  };

  return (
    <div
      className="flex flex-col md:flex-row gap-5 justify-center  w-11/12
    mx-auto"
    >
      {/* left */}
      <div className="flex flex-col w-full justify-start items-center gap-5 mt-6  h-[480px]">
        <h1 className="text-4xl font-bold text-green-500">Add Users</h1>
        <form
          onSubmit={handleFormOnSubmit}
          className="bg-green-300 flex flex-col justify-center items-center gap-4  mx-auto py-8 px-5 w-full h-full"
        >
          <input
            className=" p-4 w-11/12"
            type="text"
            name="name"
            id=""
            placeholder="Enter Your Name"
            required
          />
          <input
            className=" p-4 w-11/12"
            type="text"
            name="email"
            id=""
            placeholder="Enter Your Email"
            required
          />
          <input
            className="bg-red-500 hover:bg-red-700 py-3 px-6 text-white font-semibold duration-500"
            type="submit"
            value="Add User"
          />
        </form>
      </div>
      {/* right */}
      <div className="flex flex-col w-full justify-start items-center gap-5 mt-6  h-[480px]">
        <h1 className="text-4xl font-bold text-green-500">
          Total Users:{" "}
          <p className="text-red-500 inline-block">{users.length}</p>
        </h1>
        <div className="bg-gray-200 flex flex-col justify-center items-start gap-4 w-full mx-auto py-8 px-5 text-black overflow-auto pt-32">
          {users.map((user, index) => (
            <div
              key={user._id}
              className="flex gap-5 justify-start items-center border-[3px] border-gray-300 w-full p-1 px-2 "
            >
              <div className="text-3xl basis-[10%] pl-1">{index + 1}</div>
              <div className="basis-[70%]">
                <p className="font-bold">{user.name}</p>
                <p className="font-bold">{user.email}</p>
              </div>
              <div className="flex gap-2 basis-[20%]">
                <Link to={`/update/${user._id}`}>
                  <button className="bg-lime-500 text-white p-1 hover:bg-lime-700 duration-500 text-sm px-2 py-2">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelteUser(user._id)}
                  className="bg-red-500 text-white px-2 py-2 hover:bg-red-700 duration-500  text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
