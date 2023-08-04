import React, { useState } from "react";

function Form() {
  const [name, setname] = useState("username");
  const [email, setemail] = useState("email");

  const handlenamechange = (e) => {
    console.log("name" + " " + e.target.value);
    setname(e.target.value);
  };

  const handlemailchange = (e) => {
    console.log("email" + e.target.value);
    setemail(e.target.value);
  };

  //   merge above two function into one

  const handleinput = (e) => {
    console.log(e);
    // if else -- to identify which input field is clicked by using name attr in input field
    if (e.target.name == "username") {
      setname(e.target.value);
    } else {
      setemail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div>
      Form practise:
      <form onClick={handleSubmit}>
        <input
          value={name}
          name="username"
          placeholder="name"
          onChange={handleinput}
        />
        <input
          placeholder="email"
          value={email}
          name="email"
          onChange={handleinput}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
