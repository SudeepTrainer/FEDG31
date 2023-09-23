import { useState } from "react";
import "./myState.css"
function MyState() {

    // let stateVar = useState(5);
    // console.log(stateVar);
    // console.log(stateVar[0]);

    // const tasks = ["Task 1", "Task 2", "Task 3"];
    // const taskList = tasks.map((item) => <h2>{item}</h2>)

    let [tasks, setTasks] = useState([]);
    console.log(tasks);

    function handleClick() {
        let newTask = `Task ${tasks.length + 1}`;
        // tasks.push(newTask);
        setTasks([...tasks, newTask]);
        console.log(tasks);
        // update the UI
    }

    return (
        < div >
            <button onClick={handleClick}>Add Task</button>
            {tasks}
        </div >
    )
}

export default MyState;