import { useState } from "react";

interface ValueType {
  text: string;
  amount: number | string;
}

const AddTransaction = (): JSX.Element => {
  const [value, setValue] = useState<ValueType>({
    text: "",
    amount: "",
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    if (name === "amount") {
      setValue((prevState) => ({ ...prevState, [name]: +value }));
      return;
    }
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log({ value });
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            value={value.text}
            onChange={handleChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={value.amount}
            onChange={handleChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
