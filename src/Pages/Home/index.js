import React, { useEffect } from 'react'
import { nama_pasangan } from '../../Constants/global'
import '../../css/waves.css'
import cover from '../../Img/compress/gallery-0.webp'
import cover2 from '../../Img/compress/gallery-3.webp'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home({fadeIn}) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div id="home" className="landing-animation w-full bg-cover" style={{ backgroundImage: window.innerWidth > 992 ? `url(${cover2})` : `url(${cover})` }}>
                <div className='absolute h-screen bg-black/50 w-full'></div>
                <div className='absolute h-screen w-full'>
                    <div className='absolute top-2/4 lg:top-1/3 left-0 right-0'>
                        <div className={`text-center ${fadeIn === true ? 'scale-100' : 'scale-0'} duration-1000`}>
                            <div className='text-gray-200 font-bold text-lg mb-4 mt-16'>
                                PERNIKAHAN
                            </div>
                            <div className='text-white custom-font-2 font-semibold md:text-6xl text-5xl mb-4'>
                                {nama_pasangan}
                            </div>
                            <div className='text-gray-200 font-bold text-lg mb-4'>
                                12 JANUARI 2023
                            </div>
                        </div>
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
