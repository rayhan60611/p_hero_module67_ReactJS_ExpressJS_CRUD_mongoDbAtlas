// import React from "react";

import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

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
    <div className="flex flex-col md:flex-row gap-5 justify-center ">
      {/* left */}
      <div className="flex flex-col w-full justify-start items-center gap-5 mt-6 basis-1">
        <h1 className="text-4xl font-bold text-green-500">Add Users</h1>
        <form
          onSubmit={handleFormOnSubmit}
          className="bg-green-300 flex flex-col justify-center items-center gap-4 w-[400px] mx-auto py-8 px-5"
        >
          <input
            className=" p-4"
            type="text"
            name="name"
            id=""
            placeholder="Enter Your Name"
            required
          />
          <input
            className=" p-4"
            type="text"
            name="email"
            id=""
            placeholder="Enter Your Email"
            required
          />
          <input
            className="bg-red-500 hover:bg-red-700 p-2 text-white font-semibold duration-500"
            type="submit"
            value="Add User"
          />
        </form>
      </div>
      {/* right */}
      <div className="flex flex-col w-full justify-start items-center gap-5 mt-6 basis-1">
        <h1 className="text-4xl font-bold text-green-500">
          Total Users: {users.length}
        </h1>
        <div className="bg-green-300 flex flex-col justify-center items-start gap-4 w-[400px] mx-auto py-8 px-5 text-blck">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex gap-5 justify-between items-center border-[1px] border-red-50 w-full p-1"
            >
              <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => handleDelteUser(user._id)}
                  className="bg-red-500 text-white p-1 hover:bg-green-500 duration-500 border-2 hover border-red-600"
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
