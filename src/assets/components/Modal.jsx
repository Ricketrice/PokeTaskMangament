import { useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom';


export default function Modal({children, ref}) {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })
    
    return createPortal(
    <dialog ref={dialogRef} className="px-8 py-8 rounded-md ">
        {children}
        <form>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-white font-medium hover:bg-stone-700 transition-colors" type="submit">Close</button>
        </form>
    </dialog>, document.getElementById('modal-root'))
}