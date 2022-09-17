export interface Transaction<T> {
	text: string;
	amount: T;
}

export interface Transactions {
	id: number;
	text: string;
	amount: number;
}
