import React, { memo } from "react";

function RectButton({ totalRects, setTotalRects, handleAddRectClicked }) {
    console.count('Rect Button renders');
	return <button onClick={handleAddRectClicked}>Rects {totalRects}</button>;
}

export default memo(RectButton);