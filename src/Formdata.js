import React, { useState } from "react";
// import "./Style.css";

function Formdata() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setname(value);
    } else if (name === "email") {
      setemail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter both name and email.");
      return;
    }
    const newTodo = { id: Date.now(), name, email };
    setTodoList([...todoList, newTodo]);
    setname("");
    setemail("");
  };

  const handleUpdate = (id) => {
    // Find the item to update using its unique id
    const itemToUpdate = todoList.find((item) => item.id === id);
    if (itemToUpdate) {
      setname(itemToUpdate.name);
      setemail(itemToUpdate.email);
      // Remove the item from the todoList
      const updatedTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(updatedTodoList);
    }
  };

  const handleDelete = (id) => {
    // Remove the item from the todoList
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h2>Todo List:</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          name="username"
          placeholder="Name"
          onChange={handleInput}
        />
        <input
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <span>{item.email}</span>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formdata;
