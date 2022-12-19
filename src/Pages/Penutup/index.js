import React, { useEffect } from 'react'
import { nama_pasangan } from '../../Constants/global'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Penutup() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='mb-16 bg-[#413327] landing-animation2'>
                <div className='max-w-xl mx-auto'>
                    <div className='mx-4 py-16' data-aos="fade-up">
                        <h1 className='text-center text-white text-3xl font-semibold custom-font-3 mx-4 mb-8'>DOA PENGANTIN</h1>
                        <h1 className='text-center text-white text-2xl mb-2 arial'>بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِى خَيْرٍ</h1>
                        <h1 className='text-center text-white text mb-4 italic arial'>Barakallahu laka wa baraka ‘alaika wa jama’a bainakuma fiil Khairin</h1>
                        <h1 className='text-center text-white text mb-4 font-bold italic arial'>”Mudah-mudahan Allah memberkahi engkau dalam segala hal (yang baik) dan mempersatukan kamu berdua dalam kebaikan”</h1>
                        <p className='my-16 text-center text-white font-semibold'>
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restunya, kami ucapkan terima kasih.
                        </p>
                        <h1 data-aos="fade-up" className='text-center font-bold custom-font-2 md:text-6xl text-5xl text-white'>{nama_pasangan}</h1>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="sine-wave relative">
                    <svg className="svg-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                        </defs>
                        <g className="svg-waves__parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="3"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="5"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="7"></use>
                        </g>
                    </svg>
                </div>

            </div>
        </>
    )
}
