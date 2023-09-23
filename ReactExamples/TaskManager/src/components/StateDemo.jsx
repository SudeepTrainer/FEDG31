import { useState } from "react";
import "./style.css"
function StateDemo() {
    let [isImportant, setIsImportant] = useState(true);
    function handleClick() {
        setIsImportant(prev => !prev);
    }
    return (
        <div>
            <h1>Do you want to learn React?</h1>
            <button onClick={handleClick}>
                {
                    isImportant ? "YES" : "NO"
                }
            </button>
        </div>
    )
}
export default StateDemo;