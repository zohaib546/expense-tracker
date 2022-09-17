import { Transactions } from "../../types/types";

interface BalanceProps {
	data: Transactions[];
}

function Balance({ data }: BalanceProps) {
	const currentBalance = `$${data.reduce((prev, curr) => (prev += curr.amount), 0)}.00`;
	const currentIncome = `$${data.reduce(
		(prev, curr) => (prev += curr.amount > 0 ? curr.amount : 0),
		0
	)}.00`;
	const currentExpense = `$${
		data.reduce((prev, curr) => (prev += curr.amount < 0 ? curr.amount : 0), 0) * -1
	}.00`;

	return (
		<>
			<h4>Your Balance</h4>
			<h1>{currentBalance}</h1>
			<div className="inc-exp-container">
				<div>
					<h4>Income</h4>
					<p id="money-plus" className="money plus">
						{currentIncome}
					</p>
				</div>
				<div>
					<h4>Expense</h4>
					<p id="money-minus" className="money minus">
						{currentExpense}
					</p>
				</div>
			</div>
		</>
	);
}

export default Balance;
