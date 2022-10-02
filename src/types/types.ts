export interface TransactionType<T> {
	text: string;
	amount: T;
}

export interface Transaction {
	id: number;
	text: string;
	amount: number;
}
