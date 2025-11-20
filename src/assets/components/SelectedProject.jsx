import Task from "./Task"

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {
    const formattedDueDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: "numeric"
    })
    return <div className="w-1/2 mt-16 px-8">
        <header  className="border-b-2 border-stone-300 pb-4 mb-8">
        <div className="flex items-center gap-20 mb-2">
             <h1 className="text-3xl font-bold text-stone-700">{project.title}</h1>
            <button onClick={onDelete}className="px-4 py-2 text-stone-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium">Delete</button>
        </div>
        <p className="text-stone-500 text-sm">{formattedDueDate}</p>
        <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">{project.description}</p>
        </header>
        <h1  className="text-1xl font-bold text-stone-700">TASK</h1>
        <Task tasks={tasks}onAdd={onAddTask} onDelete={onDeleteTask}/>


    </div>
}