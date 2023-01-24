import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NewsContent({ item }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		console.log("on click working");
		setIsOpen(!isOpen);
	};
	return (
		// <motion.div className="news-card" onClick={toggleOpen}>
		// 	
		// 	
		// 	<AnimatePresence>
		// 		{isOpen && <Content content={item.content}></Content> }
		// 	</AnimatePresence>
		// </motion.div>
		<motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
			<img className="news-card-image" src={item.urlToImage} />
            <p className="news-card-title">{item.title}</p>
			<AnimatePresence>{isOpen && <Content content={item.content} />}</AnimatePresence>
		</motion.li>
	);
}

function Content({ content }) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<p>{content}</p>
		</motion.div>
	);
}

export default NewsContent;
