import React, { useEffect } from 'react'
import masker from '../../Img/masker.png'
import cucitangan from '../../Img/cucitangan.png'
import jagajarak from '../../Img/jagajarak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Protocol() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='mt-16'>
                <div className='max-w-4xl mx-auto mb-16'>
                    <div className='mx-2'>
                        <h1 data-aos="fade-up" className='custom-font-5 md:text-3xl text-2xl text-center mb-16'>
                            Sehubungan dengan situasi pandemi Covid-19, tanpa mengurangi rasa hormat, kami menghimbau kepada seluruh tamu undangan untuk menerapkan protokol kesehatan.
                        </h1>
                        <div className='flex justify-center gap-4'>
                            <div data-aos="fade-up" className='w-32 text-center custom-font-5'>
                                <div className='mx-2'>
                                    <img src={masker} className="mb-2" alt="protocol" />
                                </div>
                                <h1 className='text-2xl'>Gunakan Masker</h1>
                            </div>
                            <div data-aos="fade-up" className='w-32 text-center custom-font-5'>
                                <div className='mx-2'>
                                    <img src={cucitangan} className="mb-2" alt="protocol" />
                                </div>
                                <h1 className='text-2xl'>Cuci Tangan</h1>
                            </div>
                            <div data-aos="fade-up" className='w-32 text-center custom-font-5'>
                                <div className='mx-2'>
                                    <img src={jagajarak} className="mb-2" alt="protocol" />
                                </div>
                                <h1 className='text-2xl'>Jaga Jarak</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#333333] p-3 custom-font-4 text-white text-center'>
                    Created <FontAwesomeIcon icon={faHeart} className="text-red-500"/> by <a rel="noopener noreferrer" href='https://wa.me/+6287817379229' target="_blank" className='border-b-[1px]'>Radhian Sobarna</a>
                </div>
            </div>
        </>
    )
}
