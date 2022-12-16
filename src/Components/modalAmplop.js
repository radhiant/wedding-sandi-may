import { faClose, faCopy, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'flowbite-react'
import React from 'react'
import Swal from 'sweetalert2'

export default function ModalAmplop({ onClose, visible }) {

    const copyrekwanita = () => {
        navigator.clipboard.writeText('0344863794');
        Swal.fire({
            html: "Berhasil menyalin <br> rekening: <b>0344863794</b>",  
            icon: 'success',
            confirmButtonColor: '#413327',
            confirmButtonText: 'OKE',
          })
    }

    const copyrekpria = () => {
        navigator.clipboard.writeText('1650595021');
        Swal.fire({
            html: "Berhasil menyalin <br> rekening: <b>1650595021</b>",  
            icon: 'success',
            confirmButtonColor: '#413327',
            confirmButtonText: 'OKE'
          })
    }

    const wawanita = () => {
        window.open('https://api.whatsapp.com/send?phone=6285728006013', "_blank" );
    }
    const wapria = () => {
        window.open('https://api.whatsapp.com/send?phone=6285740241333', "_blank" );
    }

    return (
        <>
            <React.Fragment>
                <Modal
                    show={visible}
                    onClose={onClose}
                    position="center"
                >
                    <Modal.Body className='bg-[#413327] rounded-lg border-0 shadow-lg'>
                        <div className='flex justify-end'>
                            <button onClick={onClose} className='py-3 px-2 duration-300 text-2xl hover:scale-110 font-bold text-white'>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        <div className="space-y-6">
                            <div className='text-5xl custom-font-2 text-center text-white'>Berikan Amplop</div>
                            <p className='text-center font-medium text-white custom-font-3 md:text-xl'>Bagi yang ingin memberikan amplop sebagai hadiah untuk pernikahan kami, silakan transfer ke rekening ya 😊</p>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                                <div>
                                    <div className='bg-[#dfc4a7] rounded-lg py-3 mb-2'>
                                        <h1 className='text-center font-medium text-[#413327] text-2xl'>BNI <br /> 0344863794 <br /> Siti Maesaroh</h1>
                                    </div>
                                    <button onClick={() => copyrekwanita()} className='py-3 bg-gray-500 rounded-lg w-full mb-2 text-white hover:bg-gray-700'>
                                        <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                        Salin Nomor Rekening
                                    </button>

                                    <button onClick={() => {wawanita()}} className='py-3 bg-green-600 rounded-lg w-full text-white hover:bg-green-700'>
                                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                                        Konfirmasi via Whatsapp
                                    </button>
                                </div>
                                <div>
                                    <div className='bg-[#dfc4a7] rounded-lg py-3 mb-2'>
                                        <h1 className='text-center font-medium text-[#413327] text-2xl'>BCA <br /> 1650595021 <br /> Hany Sandi Himawan</h1>
                                    </div>
                                    <button onClick={() => {copyrekpria()}} className='py-3 bg-gray-500 rounded-lg w-full mb-2 text-white hover:bg-gray-700'>
                                        <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                        Salin Nomor Rekening
                                    </button>

                                    <button onClick={() => {wapria()}} className='py-3 bg-green-600 rounded-lg w-full text-white hover:bg-green-700'>
                                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                                        Konfirmasi via Whatsapp
                                    </button>
                                </div>
                            </div>
                            <p className='text-center font-medium text-white custom-font-3 md:text-xl'>
                                Untuk konfirmasi pengiriman Amplop boleh ke nomor Whatsapp mempelai. Terimakasih 😊🙏
                            </p>
                            <div className='mb-4'></div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    )
}
