import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon } from "./components/icon";
import audioFile from './assets/music/cancion.mp3';

import './App.css';

function App() {

  return (
    <main className="font-sans flex flex-col relative items-center justify-center min-h-screen p-5 pb-20 gap-16 lg:p-20">
      <section 
        className="w-full max-w-[500px] relative min-h-[800px] flex flex-col items-center justify-center gap-8 bg-cover bg-fixed bg-center md:bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/img/girl-shadow.jpg')" }}
      >
        <img 
          src="https://miinvitacion.com.mx/wp-content/uploads/2024/02/CORONA-NEW-BLANCA.png" 
          alt="Girl Shadow" 
          className="w-[40px] h-auto"
        />
        <span className="text-2xl font-[Ananda] text-center">Mis XV años</span>
        <p className="text-[6.5rem] leading-[5rem] font-[Nuptial] text-center">
          Michelle
        </p>
        <audio className="" controls autoPlay src={audioFile} />
        <img 
          src="https://miinvitacion.com.mx/wp-content/uploads/2024/02/Diseno-sin-titulo-2024-02-22T210615.901.png" 
          alt="Girl Shadow" 
          className="w-[40px] h-auto"
        />
      </section>
      <section className="w-full min-h-[300vh]"></section>
    </main>
  )
}

export default App
