import { useState } from "react";
import { TransactionType } from "../../types/types";

interface AddTransactionProps {
	children?: React.ReactNode;
	onAdd: (values: { text: string; amount: number }) => void;
}

const AddTransaction = (props: AddTransactionProps): JSX.Element => {
	const [value, setValue] = useState<TransactionType<string>>({
		text: "",
		amount: "",
	});

	const isDisabled = !(!!value.text.length && !!value.amount.length);

	const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
		const { name, value } = event.currentTarget;
		setValue((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		props.onAdd({ text: value.text, amount: +value.amount });
		setValue({ text: "", amount: "" });
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
				<button className="btn" disabled={isDisabled}>
					Add transaction
				</button>
			</form>
		</div>
	);
};

export default AddTransaction;
