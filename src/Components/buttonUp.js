import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ButtonUp({visible, onClick}) {
    return (
        <>
            <div className={`fixed duration-300 ${visible === true ? 'translate-x-[0px] opacity-100' : 'translate-x-[100px] opacity-0'} z-10 bottom-20 right-2`}>
                <button onClick={onClick} className="text-white text-md bg-black/75 hover:bg-black font-bold rounded-xl px-5 py-3.5 mr-2 mb-2"><FontAwesomeIcon icon={faArrowUp}/> </button>
            </div>
        </>
    )
}
