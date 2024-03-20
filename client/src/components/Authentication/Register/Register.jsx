import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    axios
      .post("http://localhost:6969/Register", user)
      .then((res) => {
        const token = res.data.token;
        if (token) {
          localStorage.setItem("token", token);
        }
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/account/login");
  };

  return (
    <center>
      <div className="flex flex-col max-w-md px-4 py-8 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-4">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link
            to="/account/login"
            className="text-sm text-blue-500  hover:text-blue-700"
          >
            &nbsp; Sign in
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form action="#">
            {/* Form fields */}
            <div className="flex w-full my-4">
              <button
                type="button"
                className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                onClick={register}
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </center>
  );
};

export default Register;
