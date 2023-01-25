import React, { useEffect, useRef, useState } from "react";
import "../DrawingBoard.css";
import { fabric } from "fabric";
import LineButton from "./LineButton";
import RectButton from "./RectButton";

function DrawingBoard() {
	const [totalLines, setTotalLines] = useState(1);
	const [totalRects, setTotalRects] = useState(1);

	useEffect(() => {
		// var ctx = ref.current.getContext("2d");
		// ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
		// ctx.fillRect(1 * (totalLines * totalLines), 0, 1, ref.current.height);
        addLine();
	}, [totalLines]);

    useEffect(() => {		
        addRect();
	}, [totalRects]);

    const addLine = () => {
        console.count('in add line')
        var ctx = ref.current.getContext("2d");
		ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
		ctx.fillRect(1 * (totalLines * totalLines), 0, 1, ref.current.height);
    }

    const addRect = () => {
        console.count('in add circle')
        var ctx = ref.current.getContext("2d");
		ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
		ctx.fillRect(1 * (totalRects * totalRects), ref.current.height/2 , 10, 10);
        
    }

    const ref = useRef(null);

    const handleAddLineClicked = () => {
        console.count('add line clicked');
        setTotalLines(totalLines + 1);
    }

    const handleAddRectClicked = () => {
        console.count('add rect clicked');
        setTotalRects(totalRects + 1);
    }
	return (
		<div className="drawing-board">
			<div className="drawing-board-tools">
				<LineButton totalLines={totalLines} setTotalLines= {setTotalLines} handleAddLineClicked={handleAddLineClicked}/>
				<RectButton totalRects={totalRects} setTotalRects={setTotalRects} handleAddRectClicked = {handleAddRectClicked}/>
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
