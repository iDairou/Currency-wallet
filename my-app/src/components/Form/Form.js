import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useReducer, useDispatch } from "react";

const Form = () => {
  const initState = {
    currency: "USD",
    quantity: 0,
    date: "",
    price: 0,
  };

  const [state, setState] = useState(initState);
  const [data, setData] = useLocalStorage("currencies", []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, state]);
  };

  const { quantity, date, price } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rodzaj waluty:
        <select name="currency" onChange={(e) => handleChange(e)} id="currency">
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
        </select>
      </label>
      {console.log(state)}
      <label>
        Data zakupu:
        <input
          value={date}
          name="date"
          onChange={(e) => handleChange(e)}
          type="date"
        />
      </label>

      <label>
        Ilość:
        <input
          onChange={(e) => handleChange(e)}
          value={quantity}
          name="quantity"
          placeholder="Podaj ilość"
          type="number"
        />
      </label>

      <label>
        Cena:
        <input
          name="price"
          value={price}
          onChange={(e) => handleChange(e)}
          placeholder="Podaj cenę"
        />
      </label>
      <button type="submit">Dodaj</button>
    </form>
  );
};
export default Form;
