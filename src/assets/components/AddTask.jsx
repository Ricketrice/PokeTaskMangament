import { useState } from "react"

export default function AddTask({onAdd}) {
    const [enteredValue, setEnteredValue] = useState("");

    function onchange(event) {
        setEnteredValue(event.target.value);
    }

    function handleClick() {
        if (enteredValue.trim() === "") {
            return;
        }
        setEnteredValue("")
        onAdd(enteredValue);
    }
    return <div className="flex gap-5">
        <input 
            type="text"
            placeholder="Add a new task..."
            className="bg-white text-stone-200 font-medium text-black "
            onChange={onchange}
            value={enteredValue}
        />
        <button onClick={handleClick}className="px-2 py-1 bg-stone-800 text-stone-200 rounded-md hover:bg-stone-700 transition-colors font-medium">Add Task</button>
    </div>
}