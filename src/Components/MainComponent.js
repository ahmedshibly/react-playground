import * as React from "react";
import { useRenderTimes } from "../Hooks/useRenderTimes";
import { Footer } from "./Footer";
import { TimeChanger } from "./TimeChanger";
import { TimeChangerV2 } from "./TimeChangerV2";

export function getCurrentTime() {
	return new Date().toISOString();
}

function MainComponent() {
	const [time, setTime] = React.useState(getCurrentTime());
	const count = useRenderTimes();
	return (
		<>
			<TimeChanger />
			{/* <TimeChangerV2 time={time} setTime={setTime} /> */}

			<main>				
				<p>The MainComponent component has re-rendered {count} times</p>
			</main>
			<Footer />
		</>
	);
}

export { MainComponent };
