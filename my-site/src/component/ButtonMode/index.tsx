

import { useState } from "react"



export const ButtonMode = () => {

    const [mode, setMode] = useState<string>("day")

const toggleMode = () => {
    if (mode === "day") {
        setMode("night")
    } else {
        setMode("day")
    }
}


    return (
        <div>
            <button onClick={toggleMode}>Day/Night</button>
        </div>
    )
}