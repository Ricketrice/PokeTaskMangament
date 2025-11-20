import pikachu from './pikachu.png'

export default function NoProject({onStartProject}) {
    

    return <div className='mt-[4rem] text-center w-2/3'>
        <img className="w-32 h-32 mx-auto"  src={pikachu} alt="Professor pikachu to remind you to do your work" />
        <h1 className="text-2xl font-bold text-stone-700">No project selected</h1>
        <p  className="text-stone-500 text-lg">Select a project or create a new one</p>
        <p>
            <button onClick={onStartProject} className="px-6 py-3 rounded-lg bg-stone-800 text-stone-200 font-semibold hover:bg-stone-700 transition-colors mt-4">Create new project</button>
        </p>

    </div>
}