import React from "react";
import './Login.css'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.name.value;
    const password = e.target.password.value;
    const data = {
      email,
      password,
    };
    if (email) {
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            console.log("login succed");
          } else {
            console.log(data.error);
          }
        });
    } else {
      alert("Error");
    }
  };
  return (
    <div className='div-login'
     
    >
      <form  onSubmit={handleSubmit}>
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
            type="password"
            className="form-control w-100"
            id="exampleFormControlInput1"
            placeholder="password"
            name="password"
          />
        </div>
        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-secondary" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
