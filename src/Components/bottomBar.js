import { faCalendar, faGift, faHome, faMusic, faPhotoVideo, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BottomBar({ visible, onMusic }) {
    return (
        <>
            <div className={`fixed z-10 ${visible === true ? 'translate-y-[0px]' : 'translate-y-[200px]'} duration-300 bottom-2 md:left-auto right-2 left-2`}>
                <div className={`text-white text-sm flex justify-between items-center bg-black/75 rounded-xl px-5 py-3.5 mr-2 mb-2`}>
                    <a href='#home' className='text-center md:mx-4'>
                        <FontAwesomeIcon icon={faHome} />
                        <span className='block text-xs text-gray-300 hover:text-white hover:font-bold'>Home</span>
                    </a>
                    <a href='#mempelai' className='text-center md:mx-4'>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span className='block text-xs text-gray-300 hover:text-white hover:font-bold'>Mempelai</span>
                    </a>
                    <a href='#acara' className='text-center md:mx-4'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className='block text-xs text-gray-300 hover:text-white hover:font-bold'>Acara</span>
                    </a>
                    <a href='#gallery' className='text-center md:mx-4'>
                        <FontAwesomeIcon icon={faPhotoVideo} />
                        <span className='block text-xs text-gray-300 hover:text-white hover:font-bold'>Gallery</span>
                    </a>
                    <a href='#gift' className='text-center md:mx-4'>
                        <FontAwesomeIcon icon={faGift} />
                        <span className='block text-xs text-gray-300 hover:text-white hover:font-bold'>Gift</span>
                    </a>
                    <div className='text-center md:mx-4 hover:cursor-pointer' onClick={onMusic}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span className='block text-xs text-gray-300 hover:text-white hover:font-bold'>Musik</span>
                    </div>
                </div>
            </div>
        </>
    )
}
