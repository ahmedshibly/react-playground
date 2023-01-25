import React, { useState } from "react";
import useDataApi from "../Hooks/useDataApi";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NewsContent from "./NewsContent";
import { NewsItem } from "./NewsItem";
import FabButton from "./FabButton";
import NewsList from "./NewsList";

function HackerNewsV2({ match }) {
	let { id } = match.params;
	const imageHasLoaded = true;
	const [query, setQuery] = useState("tesla");
	const [{ data, isLoading, isError }, doFetch] = useDataApi(
		"https://newsapi.org/v2/everything?q=tesla&from=2022-12-24&sortBy=publishedAt&apiKey=10f721a1533d4c57a17298968044024a",
		{ articles: [] }
	);

	return (
		<>
			<form
				onSubmit={(event) => {
					doFetch(
						`https://newsapi.org/v2/everything?q=${query}&from=2022-12-24&sortBy=publishedAt&apiKey=10f721a1533d4c57a17298968044024a`
					);

					event.preventDefault();
				}}
			>
				<input
					type="text"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<button type="submit">Search</button>
				<FabButton />
			</form>

			{isError && <div>Something went wrong ...</div>}

			<div className="news-section">
				{isLoading ? (
					<div>
						{/* <p>Loading ...</p> */}
						<motion.div
							className="loading-indicator"
							animate={{
								scale: [1, 1.4, 1.4, 1],

								//borderRadius: ["0%", "0%", "50%", "50%", "0%"]
							}}
							transition={{
								duration: 1.5,
								ease: "easeInOut",

								repeat: Infinity,
							}}
						/>
					</div>
				) : (
					<>
						<NewsList selectedId={id} items={data.articles} />
						<AnimatePresence>
							{id && imageHasLoaded && (
								<NewsItem
									id={id}
									items={data.articles}
									key="item"
								/>
							)}
						</AnimatePresence>
					</>
				)}
			</div>
		</>
	);
}

function HackerNewsV2Host() {
	return (
		<AnimateSharedLayout type="crossfade">
			<Router>
				<Route path={["/:id", "/"]} component={HackerNewsV2} />
			</Router>
		</AnimateSharedLayout>
	);
}

export default HackerNewsV2Host;
