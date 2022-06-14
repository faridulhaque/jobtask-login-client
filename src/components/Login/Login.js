import React from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <br />
        <input name="password" type="password" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
