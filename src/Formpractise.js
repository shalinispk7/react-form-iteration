import React, { useState } from "react";

const Formpractise = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  const nameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const emailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  //   two input into one function
  const inputhandle = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  //   handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email);
  };

  return (
    <div>
      Formpractise:
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username" onChange={inputhandle} />
        <input name="email" placeholder="email" onChange={inputhandle} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Formpractise;
