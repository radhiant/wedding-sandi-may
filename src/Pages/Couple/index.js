import React from 'react'
import hiasan1 from '../../Img/hiasan-1.png'
import pria from '../../Img/pria.png'
import wanita from '../../Img/wanita.png'

export default function Couple() {
  return (
    <>
      <div className='my-16'>
        <div className='flex justify-center mb-8'>
          <img src={hiasan1} alt='hiasan1' className='w-[80px]' />
        </div>
        <h1 className='text-center text-3xl font-semibold arial mx-4 mb-2 text-[#413327]'>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
        <p className='text-center arial text-[#413327] font-bold mb-2'>Assalamualaikum Wr Wb</p>
        <p className='text-center arial text-[#413327] text-sm mx-4 md:mx-48 mb-4'>
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami :
        </p>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 lg:mx-32 mx-4'>
          <div>
            <center>
              <img src={pria} alt='mempelai-pria' loading="lazy" className='w-[400px]' />
            </center>
            <h1 className='text-center custom-font-3 md:text-2xl text-lg text-[#413327] font-bold mb-4'>Mempelai Pria</h1>
            <h1 className='text-center custom-font-2 lg:text-6xl text-4xl text-[#413327] font-bold mb-2'>Hany Sandi Himawan</h1>
            <p className='text-[#413327] font-semibold text-center md:text-lg text-sm'>Putra Ketiga dari <br /> Bapak Hirman (Alm) & Ibu Koisah</p>
          </div>
          <div>
            <center>
              <img src={wanita} alt='mempelai-pria' loading="lazy" className='w-[400px]' />
            </center>
            <h1 className='text-center custom-font-3 md:text-2xl text-lg text-[#413327] font-bold mb-4'>Mempelai Wanita</h1>
            <h1 className='text-center custom-font-2 lg:text-6xl text-4xl text-[#413327] font-bold mb-2'>Siti Maesaroh</h1>
            <p className='text-[#413327] font-semibold text-center md:text-lg text-sm'>Putri Bungsu dari <br /> Bapak Sehuddin & Ibu Sukriyah</p>
          </div>
        </div>
      </div>
      <div className='mb-16 mt-24 bg-[#413327] flex justify-center'>
        <div className='py-16 max-w-xl'>
          <p className='text-center md:text-3xl text-2xl font-semibold arial mx-4 mb-8 text-white'>
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>
          <p className='text-center md:text-lg text-sm font-semibold italic arial mx-4 mb-2 text-white'>
            " Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir. "
          </p>
          <p className='mx-4 mb-2 text-center text-white font-bold italic'>( Q.S. Ar-Rum: 21 )</p>
        </div>
      </div>
    </>
  )
}
