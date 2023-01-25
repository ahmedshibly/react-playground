import React, { useEffect, useRef, useState } from "react";
import "../DrawingBoard.css";
import { fabric } from "fabric";

function DrawingBoard() {
	const [totalLines, setTotalLines] = useState(1);

	useEffect(() => {
		// var ctx = ref.current.getContext("2d");
		// ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
		// ctx.fillRect(1 * (totalLines * totalLines), 0, 1, ref.current.height);
        addLine();
	}, [totalLines]);

    const addLine = () => {
        console.count('in add line')
        var ctx = ref.current.getContext("2d");
		ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
		ctx.fillRect(1 * (totalLines * totalLines), 0, 1, ref.current.height);
    }

    

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setTotalLines(totalLines + 1);
            
    //     }, 1000);
    //     return () => clearInterval(id);
    //   }, [totalLines]);

    const ref = useRef(null);

	return (
		<div className="drawing-board">
			<div className="drawing-board-tools">
				<button
					onClick={() => {
						setTotalLines(totalLines + 1);
					}}
				>
					{" "}
					Add lines{" "}
				</button>
				<p>Total Lines - {totalLines}</p>
			</div>
			<canvas
				ref={ref}
				id="canvas"
				className="drawing-board-canvas"
			></canvas>
		</div>
	);
}

export default DrawingBoard;
