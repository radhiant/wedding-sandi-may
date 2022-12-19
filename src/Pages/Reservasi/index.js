import { faGift, faMessage, faMoneyBill1, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import ModalAmplop from '../../Components/modalAmplop';
import ModalKado from '../../Components/modalKado';
import hiasan1 from '../../Img/hiasan-1.png'
import db from '../../Constants/firebase'
import { collection, addDoc, query, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore';
import moment from 'moment/moment';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'moment/locale/id'  // without this line it didn't work
import Swal from 'sweetalert2';
moment.locale('id')

export default function Reservasi() {
    const [visibleAmplop, setVisibleAmplop] = useState(false);
    const [visibleKado, setVisibleKado] = useState(false);
    const [ucapan, setUcapan] = useState([]);
    const [formNama, setFormNama] = useState("");
    const [formPesan, setFormPesan] = useState("");
    const [btnLoader, setBtnLoader] = useState(false);

    const [rsvpNama, setRsvpNama] = useState('');
    const [rsvpTamu, setRsvpTamu] = useState('');
    const [rsvpPesan, setRsvpPesan] = useState('');
    const [rsvpKonfir, setRsvpKonfir] = useState('');

    const openAmplop = () => {
        setVisibleAmplop(true);
    }
    const closeAmplop = () => {
        setVisibleAmplop(false);
    }
    const openKado = () => {
        setVisibleKado(true);
    }
    const closeKado = () => {
        setVisibleKado(false);
    }

    const reservasi = () => {
        if (rsvpNama === '') {
            Swal.fire({
                text: 'Isi Nama!',
                icon: 'warning',
                confirmButtonColor: '#413327',
                confirmButtonText: 'OKE'
            })
        } else if (rsvpTamu === '') {
            Swal.fire({
                text: 'Isi Jumlah Tamu!',
                icon: 'warning',
                confirmButtonColor: '#413327',
                confirmButtonText: 'OKE'
            })
        }
        else if (rsvpPesan === '') {
            Swal.fire({
                text: 'Isi Pesan!',
                icon: 'warning',
                confirmButtonColor: '#413327',
                confirmButtonText: 'OKE'
            })
        }
        else if (rsvpKonfir === '') {
            Swal.fire({
                text: 'Pilih Konfirmasi!',
                icon: 'warning',
                confirmButtonColor: '#413327',
                confirmButtonText: 'OKE'
            })
        } else {
            window.open(`https://api.whatsapp.com/send?phone=6285728006013&text=Hai%20Sandi%20%26%20May%2C%20saya%20*${rsvpNama}*%20ingin%20konfirmasi%20kehadiran%20pada%20undangan%20pernikahan%20kalian%20bahwa%20*${rsvpKonfir}*%20bersama%20*${rsvpTamu}*%20orang.%20Saya%20ucapkan%3A%0A*${rsvpPesan}*.%20Terima%20kasih%20ya.`, "_blank");
        }

    }

    const addUcapan = async () => {
        if (formNama !== '' && formPesan !== '') {
            setBtnLoader(true);
            const storeUcapan = collection(db, 'ucapan')
            await addDoc(storeUcapan, {
                created: serverTimestamp(),
                nama: formNama,
                pesan: formPesan,
            });
            setFormNama('');
            setFormPesan('');
            setBtnLoader(false);
        } else {
            Swal.fire({
                text: 'Isi Nama & Pesan!',
                icon: 'warning',
                confirmButtonColor: '#413327',
                confirmButtonText: 'OKE'
            })
        }
    }

    const [expiryTime, setExpiryTime] = useState("12 jan 2023 08:00:00");
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );
    const countdownTimer = () => {

        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }

        }, 1000);
    }

    useEffect(() => {
        const Fetchdata = async () => {
            const q = await query(collection(db, 'ucapan'), orderBy('created', 'desc'))
            onSnapshot(q, (querySnapshot) => {
                setUcapan(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
        Fetchdata();
        countdownTimer();
        AOS.init();
    }, []);

    return (
        <>
            <div id="gift" className='my-16'>
                <div className='flex justify-center mb-8'>
                    <img src={hiasan1} data-aos="fade-up" alt='hiasan1' className='w-[80px]' />
                </div>
                <h1 data-aos="fade-up" className='text-center text-2xl font-semibold custom-font-3 mx-4 text-[#413327]'>Menuju Waktu Acara</h1>
                <h1 data-aos="fade-up" className='text-center text-4xl font-semibold custom-font-3 mx-4 mb-8 text-[#413327]'>Pernikahan Kami</h1>
                <div data-aos="fade-up" className='flex justify-center gap-4 mb-8'>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold'>{countdownTime.countdownDays}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Hari</p>
                    </div>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold '>{countdownTime.countdownHours}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Jam</p>
                    </div>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold '>{countdownTime.countdownMinutes}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Menit</p>
                    </div>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold '>{countdownTime.countdownSeconds}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Detik</p>
                    </div>
                </div>
                <h1 data-aos="fade-up" className='text-center text-2xl font-semibold custom-font-3 mx-4 text-[#413327] mb-4'>Untuk Yang Berhalangan Hadir, Kami Tambahkan Fitur Dibawah Ini</h1>
                <div data-aos="fade-up" className='flex justify-center'>
                    <button type="button" onClick={() => openAmplop()} className="text-white shadow-lg text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2">
                        <FontAwesomeIcon icon={faMoneyBill1} /> Amplop
                    </button>
                    <button type="button" onClick={() => openKado()} className="text-white shadow-lg text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2">
                        <FontAwesomeIcon icon={faGift} /> Kirim Kado
                    </button>
                </div>
            </div>
            <div className='mt-16 bg-[#413327] py-8'>
                <h1 data-aos="fade-up" className='text-center text-white text-3xl font-semibold custom-font-3 mx-4 mb-4'>Konfirmasi Kehadiran</h1>
                <div data-aos="fade-up" className='max-w-lg mx-auto mb-16'>
                    <div className='mx-4'>
                        <input value={rsvpNama} onChange={(e) => { setRsvpNama(e.target.value) }} type="text" autoComplete='off' id="first_name" class="bg-gray-50 text-[#413327] border border-gray-300 font-bold text-sm rounded-lg focus:ring-[#fbeeee] focus:border-[#fbeeee] block w-full p-2.5 mb-2" placeholder="Isi Nama" />
                        <input type="text" value={rsvpTamu} onChange={(e) => { setRsvpTamu(e.target.value) }} autoComplete='off' id="first_name" class="bg-gray-50 text-[#413327] border border-gray-300 font-bold text-sm rounded-lg focus:ring-[#fbeeee] focus:border-[#fbeeee] block w-full p-2.5 mb-2" placeholder="Jumlah Tamu" />
                        <textarea id="message" value={rsvpPesan} onChange={(e) => { setRsvpPesan(e.target.value) }} rows="4" class="block p-2.5 w-full text-sm text-[#413327] font-bold bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#fbeeee] focus:border-[#fbeeee] mb-2" placeholder="Pesan Ucapan">{rsvpPesan}</textarea>
                        <label className='text-left font-semibold text-white'>Konfirmasi</label>
                        <div class="flex items-center mt-2" onClick={() => {setRsvpKonfir('Iya, Saya Akan Datang')}}>
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500" />
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-white">Iya, Saya Akan Datang</label>
                        </div>
                        <div class="flex items-center mt-2 mb-4" onClick={() => {setRsvpKonfir('Maaf, Saya Tidak Bisa Datang')}}>
                            <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500" />
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-white">Maaf, Saya Tidak Bisa Datang</label>
                        </div>
                        <button onClick={() => {reservasi()}} className='py-3 bg-green-600 rounded-full w-full mb-4 text-white hover:bg-green-700'>
                            <FontAwesomeIcon icon={faMessage} className="mr-2" />
                            Reservasi via Whatsapp
                        </button>
                    </div>
                </div>
                <h1 data-aos="fade-up" className='text-center text-white text-2xl font-semibold custom-font-3 mx-4'>Kirim Pesan</h1>
                <h1 data-aos="fade-up" className='text-center text-white md:text-4xl text-2xl font-semibold custom-font-3 mx-4 mb-4'>Untuk Kedua Mempelai</h1>
                <div data-aos="fade-up" className='max-w-lg mx-auto mb-16'>
                    <div className='mx-4'>
                        <input autoComplete='off' type="text" value={formNama} onChange={(e) => { setFormNama(e.target.value) }} id="first_name" class="bg-gray-50 text-[#413327] border border-gray-300 font-bold text-sm rounded-lg focus:ring-[#fbeeee] focus:border-[#fbeeee] block w-full p-2.5 mb-2" placeholder="Isi Nama" />
                        <textarea autoComplete='off' id="message" rows="4" onChange={(e) => { setFormPesan(e.target.value) }} class="block p-2.5 w-full text-sm text-[#413327] font-bold bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#fbeeee] focus:border-[#fbeeee] mb-2" value={formPesan} placeholder="Pesan"></textarea>
                        <div className='flex justify-between '>
                            {
                                btnLoader === false ?
                                    <button onClick={() => addUcapan()} className='py-3 px-4 bg-green-600 rounded-xl  mb-4 text-white hover:bg-green-700'>
                                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                                        Kirim Ucapan
                                    </button> : <button disabled className='py-3 px-4 rounded-xl  mb-4 text-white bg-green-700'>
                                        <svg aria-hidden="true" role="status" class="inline mr-2 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Memuatt...
                                    </button>
                            }
                            <h1 className='custom-font-4 text-white mt-2'>{ucapan.length} Pesan</h1>
                        </div>



                        <div className='max-h-[500px] overflow-auto px-2'>
                            {ucapan.map((ucap) => (
                                <div className='rounded-3xl rounded-bl-none bg-white p-4 custom-font-4 mb-4'>
                                    <h1 className='text-[#413327] font-bold text-sm'>{ucap.data.nama}</h1>
                                    <p className='text-gray-500/75 font-semibold text-xs mb-2'>{ucap.data.created !== null ? moment(ucap.data.created.toDate()).fromNow() : 'baru saja'}</p>
                                    <p className='text-xs text-gray-600 font-semibold'>{ucap.data.pesan}</p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
            <ModalAmplop visible={visibleAmplop} onClose={() => closeAmplop()} />
            <ModalKado visible={visibleKado} onClose={() => closeKado()} />
        </>
    )
}
