import AddTask from "./AddTask";

export default function Task({tasks, onAdd, onDelete}) {
    return <section>
        <AddTask onAdd={onAdd}/>
        {tasks.length === 0 && (<p>This project doesnt have any task yet.</p>)}
        {tasks.length > 0 && (<ul>
            {tasks.map((task) => <li className="mt-2 flex items-center justify-between bg-stone-100 px-4 py-3 rounded-md hover:bg-stone-200 transition-colors "key={task.id}>
                <span className="text-stone-800">{task.text}</span>
                <button onClick={() => onDelete(task.id)} className="text-stone-600 hover:text-red-600 px-2 py-1 rounded transition-colors font-medium text-sm">Clear</button>
            </li>)}

        </ul>)}
        

    </section>
}