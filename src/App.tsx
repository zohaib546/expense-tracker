import { useState } from "react";
import Balance from "./components/Balance/Balance";
import History from "./components/History/History";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { Transaction, Transactions } from "./types/types";
import "./App.css";

// I made this comment for review branch

function App() {
	const [transactions, setTransactions] = useState<Transactions[]>([]);

	const handleAdd = (values: Transaction<number>) => {
		const transaction = {
			id: Math.floor(Math.random() * 100000000),
			...values,
		};
		setTransactions([...transactions, transaction]);
	};

	const handleDelete = (id: number) => {
		setTransactions(transactions.filter((transaction) => transaction.id !== id));
	};

	return (
		<>
			<h2>Expense Tracker</h2>
			<Balance data={transactions} />
			<div className="container">
				<div className="grid">
					<History datalist={transactions} onDelete={handleDelete} />
					<AddTransaction onAdd={handleAdd} />
				</div>
			</div>
		</>
	);
}

export default App;
