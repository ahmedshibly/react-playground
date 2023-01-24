import * as React from "react";
import { useRenderTimes } from "../Hooks/useRenderTimes";
import { getCurrentTime } from "./MainComponent";

export function TimeChanger() {
    const [time, setTime] = React.useState(getCurrentTime);
    const count = useRenderTimes();
    const onClicked = ()=> {
        setTime(getCurrentTime())
    }
    return (
        <header>
            <p>Current time is - {time} </p>
            <p>Color Changer component has re-rendered {count} times</p>
            <button onClick={onClicked}>Click</button>
        </header>
    );
}
