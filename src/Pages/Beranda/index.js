import React, { useState } from 'react'
import Acara from '../Acara';
import Couple from '../Couple';
import Cover from '../Cover';
import Gallery from '../Gallery';
import Home from '../Home';
import Penutup from '../Penutup';
import Protocol from '../Protocol';
import Reservasi from '../Reservasi';
export default function Beranda() {
    const [showUp, setShowUp] = useState(false); 
    const bukaUndangan = () => {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "auto";
        setShowUp(true);
      }
    return (
        <>
            <Cover transformUp={showUp} onClick={bukaUndangan} />
            <Home />
            <Couple />
            <Acara />
            <Gallery />
            <Reservasi />
            <Penutup />
            <Protocol />
        </>
    )
}
