import React, { memo } from "react";

function LineButton({ totalLines, setTotalLines, handleAddLineClicked }) {
    console.count('Line Button renders');
	return <button onClick={handleAddLineClicked}>Lines {totalLines}</button>;
}

export default memo(LineButton);
