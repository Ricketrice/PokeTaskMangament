import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {
    const buttonColor ="w-[5rem] px-2 py-1 rounded-md border border-slate-300 bg-gray-300 text-slate-900 font-medium cursor-pointer shadow-sm hover:bg-gray-500 hover:border-gray-400"
    
    const modalRef = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const userTitle = title.current.value;
        const userDescription = description.current.value;
        const userDueDate = dueDate.current.value;

        if (userTitle.trim() === '' || userDescription.trim() === '' || userDueDate.trim() === '') {
            return (
                modalRef.current.open()
            )
        }

        onAdd({
            title: userTitle, 
            description: userDescription, 
            dueDate: userDueDate
        })
    }
    return <>
    <Modal ref={modalRef}>
        <h2 className="text-2xl font-bold text-red-600 mb-4">Invalid input</h2>
        <h3 className="text-stone-700 text-lg mb-3">You forgot to save enter a value</h3>
        <h3 className="text-stone-600 text-lg mb-6">Please be reminded to add a proper input next time</h3>
    </Modal>
    <div className="w-[30rem] mt-10 ml-[200px]"  style={{marginLeft: '50px'}}>
        <menu 
        className="
        flex
        items-center
        justify-end
        gap-4
        "
        >
            <button onClick={onCancel}className={buttonColor}>Close</button>
            <button 
            className={buttonColor} onClick={handleSave}
            >Save</button>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title"/>
            <Input ref={description}label="Description" textarea/>
            <Input type="date" ref={dueDate}label="Due Date"/>
        </div>
    </div> 
    </>
}