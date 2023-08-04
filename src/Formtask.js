import React, { useState } from "react";

const Formtask = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [arr, setArr] = useState([]);
  const [checkedstatus, setcheckedstatus] = useState(false);
  const [updatebtn, setUpdatebtn] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name, price, stock, checkedstatus);
    const newArr = {
      productName: name,
      productPrice: price,
      stockList: stock,
      checkedstatus: checkedstatus,
    };
    setArr([...arr, newArr]);
  };

  // const changeName = (e) => {
  //   setName(e.target.value);
  // };
  // const changeprice = (e) => {
  //   setPrice(e.target.value);
  // };
  // const changestock = (e) => {
  //   setStock(e.target.value);
  // };
  // const ischecked = (e) => {
  //   setcheckedstatus(e.target.checked);
  // };

  const handleInput = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "stock") {
      setStock(e.target.value);
    } else if (e.target.name === "check") {
      setcheckedstatus(e.target.checked);
    }
  };

  const deleteItem = (el) => {
    const newItem = arr.filter((val, i) => i !== el);
    setArr(newItem);
  };

  const updateItem = (index) => {
    // setName("prem");
    // console.log(arr.filter((cv, i) => index === i));
    arr.filter((cv, i) => {
      if (index === i) {
        setName(cv.productName);
        setPrice(cv.productPrice);
        setStock(cv.stockList);
        setcheckedstatus(cv.checkedstatus);
      }
    });
    setUpdatebtn(true);
  };

  const updateval = () => {
    setUpdatebtn(false);
  };

  return (
    <div>
      <h1>Formtask</h1>
      <form onSubmit={handlesubmit}>
        <label>Product Name: </label>
        <input
          placeholder="productname"
          name="name"
          value={name}
          onChange={handleInput}
        />
        <br />
        <label> Price: </label>
        <input
          placeholder="price"
          name="price"
          value={price}
          onChange={handleInput}
        />
        <br />
        <label>StockList: </label>
        <input
          placeholder="stock"
          name="stock"
          value={stock}
          onChange={handleInput}
        />
        <br />
        <label>checkbox: </label>
        <input
          type="checkbox"
          value={checkedstatus}
          checked={checkedstatus}
          onChange={handleInput}
          name="check"
        />
        <br />
        {updatebtn ? (
          <button onClick={() => updateval()}>update values</button>
        ) : (
          <input type="submit" />
        )}
      </form>

      <div>
        {arr.map((item, index) => {
          console.log(item);
          return (
            <div key={index}>
              <p>Name : {item.productName}</p>
              <p>Price : {item.productPrice}</p>
              <p>StockList:{item.stockList}</p>
              <p> {item.checkedstatus ? "true" : "false"}</p>

              <button onClick={() => deleteItem(index)}>delete</button>
              <button onClick={() => updateItem(index)}>update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Formtask;
