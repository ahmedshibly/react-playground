import React from "react";
import { motion } from "framer-motion";
// import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import FabButton from "./FabButton";
import CloseButton from "./CloseButton";

export function NewsItem({ id, items }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.15 } }}
				transition={{ duration: 0.2, delay: 0.15 }}
				style={{ pointerEvents: "auto" }}
				className="overlay"
			>
				 <Link to="/"></Link>
			</motion.div>
			<div className="card-content-container open">
				<motion.div
					className="card-content"
					layoutId={`card-container-${id}`}
				>
					<motion.div
						className="card-image-container"
						layoutId={`card-image-container-${id}`}
					>
						<img
							className="card-image"
							src={items[id].urlToImage}
							alt=""
						/>
					</motion.div>
					<motion.div
						className="title-container"
						layoutId={`title-container-${id}`}
					>
            <div>
           
              <CloseButton/>
            
            <span className="category">{items[id].author}</span>
           
            </div>
						<h2>{items[id].title}</h2>
					</motion.div>
					<motion.div className="content-container" animate>
						<span className="category">{items[id].content}</span>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
