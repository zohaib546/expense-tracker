import { Transactions } from "./../../types/types";
interface HistoryProps {
	datalist: Transactions[];
	onDelete: (id: number) => void;
}

function History({ datalist, onDelete }: HistoryProps) {
	return (
		<div>
			<h3>History</h3>
			<ul id="list" className="list">
				{datalist.map((list) => (
					<li key={list.id} className={list.amount < 0 ? "minus" : "plus"}>
						{list.text} <span>{list.amount < 0 ? `${list.amount}` : `+${list.amount}`}</span>
						<button className="delete-btn" onClick={() => onDelete(list.id)}>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default History;
