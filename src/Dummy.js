import React, { useState } from "react";

const FormPractice = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [check, setCheck] = useState(false);
  const [arr, setArr] = useState([]);

  const changeText = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const changeCheckBox = (e) => {
    setCheck(e.target.checked);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, email, check);
    const newArr = {
      userName: name,
      userEmail: email,
      check: check,
    };
    setArr([...arr, newArr]);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <input onChange={changeText} />
          <br />
          <input onChange={changeEmail} />
          <br />
          <input type="checkbox" checked={check} onChange={changeCheckBox} />
          <br />
          <br />
          <input type="submit" />
        </div>
      </form>

      <div>
        {arr.map((item, index) => {
          return (
            <div key={index}>
              <p>Name : {item.userName}</p>
              <p>Eamil : {item.userEmail}</p>
              <p>Status : {item.check ? "completed" : "notcompleted"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormPractice;
