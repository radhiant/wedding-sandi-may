import React, { useEffect, useState } from 'react'
import ButtonUp from '../../Components/buttonUp';
import MusicBg from '../../Components/musicBg';
import Acara from '../Acara';
import Couple from '../Couple';
import Cover from '../Cover';
import Gallery from '../Gallery';
import Home from '../Home';
import Penutup from '../Penutup';
import Protocol from '../Protocol';
import Reservasi from '../Reservasi';
import MusicWedding from '../../Music/Beautiful-In-White_Shane-Filan.mp3'
import BottomBar from '../../Components/bottomBar';

export default function Beranda() {
    const [showUp, setShowUp] = useState(false);
    const [btnUp, setBtnUp] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [audio] = useState(new Audio(MusicWedding));
    const [fadein, setFadein] = useState(false);
    const [vMusik, setVmusik] = useState(false);

    const toggle = () => setPlaying(!playing);
    
    const bukaUndangan = () => {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "auto";
        setShowUp(true);
        toggle();
        setFadein(true);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const vBtnTop = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setBtnUp(true);
        } else {
            setBtnUp(false);
        }
    }

    const onMusic = () => {
        setVmusik(true);
    }

    const onCloseMusic = () => {
        setVmusik(false);
    }

    useEffect(() => {
        window.onscroll = function () { vBtnTop() };
        playing ? audio.play() : audio.pause();
        audio.loop = true;
    }, [playing])


    return (
        <>
            <Cover transformUp={showUp} onClick={bukaUndangan} />
            <ButtonUp visible={btnUp} onClick={() => scrollToTop()} />
            <MusicBg onClick={toggle} statsPlay={playing} visible={vMusik} onClose={() => onCloseMusic()}/>
            <BottomBar visible={vMusik === true ? false : true} onMusic={() => {onMusic()}}/>
            <Home fadeIn={fadein} />
            <Couple />
            <Acara />
            <Gallery />
            <Reservasi />
            <Penutup />
            <Protocol />
        </>
    )
}
