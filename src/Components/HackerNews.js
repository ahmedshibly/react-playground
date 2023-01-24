import React, { useState } from "react";
import useDataApi from "../Hooks/useDataApi";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import NewsContent from "./NewsContent";

function HackerNews() {
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
					<motion.div
						className="all-news"
						// animate={{
						//     width: '100%',
						//     height: '100%'

						//     //borderRadius: ["0%", "0%", "50%", "50%", "0%"]
						// }}
						// transition={{
						//     duration: 1.5,
						//     ease: "easeInOut",
						// }}
					>
						<AnimateSharedLayout>
							<motion.ul layout initial={{ borderRadius: 25 }}>
								{data.articles.map((item, i) => (
									<NewsContent key={i} item={item} id={i} />
								))}
							</motion.ul>
						</AnimateSharedLayout>
					</motion.div>
				)}
			</div>
		</>
	);
}


export default HackerNews;
