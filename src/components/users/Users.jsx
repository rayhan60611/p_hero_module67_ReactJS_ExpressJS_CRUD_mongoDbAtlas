// import React from "react";

const Users = () => {
  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,
      email,
    };

    form.reset();
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
        <h1 className="text-4xl font-bold text-green-500">Total Users: 0</h1>
        <div className="bg-green-300 flex flex-col justify-center items-center gap-4 w-[400px] mx-auto py-8 px-5 "></div>
      </div>
    </div>
  );
};

export default Users;
