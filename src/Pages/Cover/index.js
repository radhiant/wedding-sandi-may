import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { nama_pasangan } from '../../Constants/global'
import hiasan1 from '../../Img/hiasan-1.png'

export default function Cover({ transformUp, onClick }) {
    // useEffect(() => {
    //     let url = new URL(window.location.origin);
    //     let searchParams = new URLSearchParams(url.search);
    //     console.log(searchParams.get('to'));
    // })
    return (
        <>
            <div className={`fixed w-full h-full z-20 ${transformUp === true ? 'translate-y-[-700px] opacity-0' : ''} duration-700 cover-1`}>
                <div className='absolute bg-[#dfc4a7] w-full h-full'></div>
                <div className='absolute w-full h-full'>
                    <div className='absolute top-1/4 left-0 right-0'>
                        <div className='text-center'>
                            <div className='flex justify-center mb-8'>
                                <img src={hiasan1} alt='hiasan1' className='w-[100px]' />
                            </div>
                            <div className='text-[#413327] custom-font-2 font-semibold text-5xl mb-4'>
                                {nama_pasangan}
                            </div>
                            <div className='text-[#413327] font-bold text-lg mb-4'>
                                Kpd Bpk/Ibu/Saudara/i
                            </div>
                            <p className='text-[#413327] text-sm md:text-lg mb-3 lg:mx-96 md:mx-32 mx-8'>
                                Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.
                            </p>
                            <button type="button" onClick={onClick} class="text-white text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2">
                                <FontAwesomeIcon icon={faEnvelopeOpen} /> Buka Undangan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
