export default function Sidebar({onStartProject, addedProject, onSelectProject, selectedID}) {
    return <aside className="
        px-8
        py-14
        bg-black
        text-white
        w-1/4
        h-screen
        gap-3
        flex flex-col
        
    ">
        <h1>Ricketrice taskbar</h1>
        <h1>Your project</h1>
        <button className="
        px-2
        py-1
        rounded-md
        border
        border-slate-300
        bg-gray-300
        text-slate-900
        font-medium
        cursor-pointer
        shadow-sm
        hover:bg-gray-500
        hover:border-gray-400
        "
        onClick={onStartProject}
        
        >+Add Project</button>
        <ul>
            {addedProject.map(userTask => {
                let cssStyle = "w-full text-left px-4 py-3 rounded-md bg-stone-800 text-stone-200 hover:bg-stone-700 hover:text-white transition-colors"
                if (userTask.id === selectedID) {
                    cssStyle += " bg-stone-100 text-stone-800"
                } else {
                    cssStyle += " text-stone-200"
                }
                return (
                
                <li key={userTask.id}>
                    <button 
                    
                    className={cssStyle} onClick={() => onSelectProject(userTask.id)}>{userTask.title}</button>
                </li>
            )
            }
            )}
        </ul>
    </aside>
}