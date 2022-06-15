import React, { useState } from "react";
import "./Login.css";
import toast from "react-hot-toast";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      email,
      password,
    };

    if (email) {
      fetch("https://fardul-jt-login.herokuapp.com/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            toast.success(`Login successful`, { id: "success" });
          } else if (data.error) {
            toast.error(`${data.error}`, { id: "error" });
          } else {
          }
        });
    } else {
      toast.error("Something wrong!", { id: "something wrong" });
    }
  };
  return (
    <div className="div-login">
      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "rgb(2, 48, 71)" }} className="text-center">
          Welcome Back
        </h3>
        <small
          style={{
            color: "rgb(2, 48, 71)",
            display: "block",
            textAlign: "center",
            marginTop: "-10px",
          }}
        >
          We are happy to see you again
        </small>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control w-10"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type={seePassword ? 'text' : 'password'}
            className="form-control w-100"
            id="exampleFormControlInput1"
            placeholder="password"
            name="password"
          />
        </div>
        <div className="d-grid gap-2 mt-4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-20px",
              marginBottom: "20px",
            }}
          >
            <small style={{ color: "rgb(2, 48, 71)" }}>
              <input onChange={()=>setSeePassword(!seePassword)} style={{ marginRight: "2px" }} type="checkbox" />
              Show Password
            </small>{" "}
            <small style={{ color: "rgb(2, 48, 71)" }}>Forgot password? </small>
          </div>
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
