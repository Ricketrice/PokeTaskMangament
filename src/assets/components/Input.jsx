export default function Input({label, textarea, ...props}) {
    const forInput = "w-full p-3 border border-stone-200 rounded text-stone-700 focus:outline-none focus:border-stone-400 transition-colors text-white resize-none"
    const bgStyle = { backgroundColor: '#9797928a' } 
    
    return (
        <p className="flex flex-col">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea ? 
                <textarea style={bgStyle} className={forInput} rows="2" {...props}/> : 
                <input style={bgStyle} className={forInput} {...props} />
            }
        </p>
    )
}