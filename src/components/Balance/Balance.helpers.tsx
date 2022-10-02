import { Transaction } from "../../types/types";

export const currentBalance = (data: Transaction[]) =>
	`$${data.reduce((prev, curr) => (prev += curr.amount), 0)}.00`;

export const currentIncome = (data: Transaction[]) =>
	`$${data.reduce((prev, curr) => (prev += curr.amount > 0 ? curr.amount : 0), 0)}.00`;

export const currentExpense = (data: Transaction[]) =>
	`$${data.reduce((prev, curr) => (prev += curr.amount < 0 ? curr.amount : 0), 0) * -1}.00`;
