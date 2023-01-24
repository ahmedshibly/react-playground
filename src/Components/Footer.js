import * as React from "react";
import { useRenderTimes } from "../Hooks/useRenderTimes";

export function Footer() {

    const count = useRenderTimes();
    return (
        <footer>
            <p>Footer component has re-rendered {count} times</p>
        </footer>
    );
}
