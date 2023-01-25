import React from "react";
import { NewsCard } from "./NewsCard";


function NewsList({ selectedId, items }) {
	return (
		<ul className="card-list">
			{items.map((card, i) => (
				<NewsCard
					key={i}
					{...card}
					id={i}
					isSelected={i === selectedId}
				/>
			))}
		</ul>
	);
}

export default NewsList;
