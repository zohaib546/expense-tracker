import { Transaction } from "../../types/types";
import { currentBalance, currentExpense, currentIncome } from "./Balance.helpers";

interface BalanceProps {
	data: Transaction[];
}

function Balance({ data }: BalanceProps) {
	const balance = currentBalance(data);
	const income = currentIncome(data);
	const expense = currentExpense(data);

	return (
		<>
			<h4>Your Balance</h4>
			<h1>{balance}</h1>
			<div className="inc-exp-container">
				<div>
					<h4>Income</h4>
					<p id="money-plus" className="money plus">
						{income}
					</p>
				</div>
				<div>
					<h4>Expense</h4>
					<p id="money-minus" className="money minus">
						{expense}
					</p>
				</div>
			</div>
		</>
	);
}

export default Balance;
