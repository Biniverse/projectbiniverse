import React from "react";

export const Signin = () => {
  return (
    <>
      <div className="flex justify-center px-6 py-12 lg:px-8 size-1/2 bg-white rounded-2xl my-32">
        <div className="sm:mx-100 sm:w-full sm:max-w-sm">
          <img
            className="w-full h-full object-cover "
            src={"/images/loginAiah.jpg"}
            alt={"wwew"}
          />
        </div>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm pt-20">
          <h2 className="text-5xl text-blue-900 text-left font-syne font-bold whitespace-nowrap">
            Good Evening!
          </h2>
          <h2 className="text-5xl text-blue-900 text-right my-10">10:10 PM</h2>

          <form action="/signin" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  required
                  className="w-full rounded-xl border-0 px-3 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm"></div>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-xl border-0 px-3 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <p className="mt-10 text-sm text-gray-500">
              <a
                href="google.com"
                className="font-semibold leading-6 text-blue-900 hover:text-blue-400"
              >
                Forgot Password?
              </a>
            </p>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
