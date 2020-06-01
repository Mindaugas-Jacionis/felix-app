import React from "react";

import Button from "../components/Button";

function Register(props) {
  console.log(props);

  return (
    <div className="App">
      <Button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Button
      </Button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Hello");
        }}
      >
        <input type="text" placeholder="name" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
