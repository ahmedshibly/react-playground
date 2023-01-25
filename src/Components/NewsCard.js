import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import FabButton from "./FabButton";


export function NewsCard({ id, title, category, theme, urlToImage }) {
	return (
		<li className={`card ${theme}`}>
			<div className="card-content-container">
				<motion.div
					className="card-content"
					layoutId={`card-container-${id}`}
				>
					<motion.div
						className="card-image-container"
						layoutId={`card-image-container-${id}`}
					>
						<img className="card-image" src={urlToImage} alt="" />
                        
					</motion.div>
                    <motion.div className="card-image-scrim">                    
                    </motion.div>
                    <Link to={"" + id} className={`card-open-link`} />
					<motion.div
						className="title-container"
						layoutId={`title-container-${id}`}
					>						
						<h2>{title}</h2>
                        <span className="category">{category}</span>
                        <div>
                            <FabButton/>
                        </div>
					</motion.div>
				</motion.div>
			</div>
			
		</li>
	);
}
