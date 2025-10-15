import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { TimeIcon, LocationIcon } from "./components/icon";
import audioFile from './assets/music/cancion.mp3';
import CountDown from './components/countDown';

import './App.css';

function App() {

  return (
    <main className="w-full max-w-[700px] mx-auto flex flex-col relative items-center justify-center min-h-screen md:p-5 gap-0 lg:p-20">
      <section 
        className="w-full relative min-h-[800px] flex flex-col items-center justify-center gap-8 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/girl-shadow.jpg')" }}
      >
        <img 
          src="https://miinvitacion.com.mx/wp-content/uploads/2024/02/CORONA-NEW-BLANCA.png" 
          alt="Girl Shadow" 
          className="w-[40px] h-auto mt-[5rem]"
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
      <Section className='py-20 flex flex-col items-center justify-center gap-10'>
        <img 
          src="https://miinvitacion.net/wp-content/uploads/2024/12/FLOR-5.png" 
          alt="Girl Shadow" 
          className="w-[120px] h-auto"
        />
        <p className='text-[#f4b029] text-center text-2xl bad-script-regular'>
          Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón, quiero que compartas conmigo este día tan especial: 
        </p>
        <p className='text-[#f4b029] text-center text-4xl bad-script-regular'>
          Mis 15 Años.
        </p>
      </Section>
      <Section className='py-20 flex flex-col items-center justify-center gap-6'>
        <img 
          src="https://miinvitacion.net/wp-content/uploads/2024/12/FLOR-6.png" 
          alt="Girl Shadow" 
          className="w-[70px] h-auto"
        />
        <img 
          src="https://miinvitacion.net/wp-content/uploads/2025/02/ADORNO-DORADO.png" 
          alt="Girl Shadow" 
          className="w-[120px] h-auto"
        />
        <p className='text-[#f4b029] text-center text-lg bad-script-regular'>
          En compañía de mi mamá
        </p>
        <p className='text-[#f4b029] text-center text-4xl alex-brush-regular !font-extrabold'>
         Ana Karen Morales 
        </p>
        <img 
          src="https://miinvitacion.net/wp-content/uploads/2025/02/ADORNO-DORADO.png" 
          alt="Girl Shadow" 
          className="w-[120px] h-auto mt-10"
        />
        <p className='text-[#f4b029] text-center text-lg bad-script-regular'>
          Mis padrinos
        </p>
        <p className='text-[#f4b029] text-center text-4xl alex-brush-regular !font-extrabold'>
          Aarón Ramos Ramírez <br />
          & <br />
          Rigel Jacinto Morales
        </p>
      </Section>
      <Section className='py-20 flex flex-col items-center justify-center gap-10'>
        <p className='text-[#f4b029] text-center text-4xl font-[Nuptial] !font-bold'>
          – Fecha –
        </p>
        <img 
          src="/img/fecha.png" 
          alt="Girl Shadow" 
          className="w-[220px] h-auto"
        />
        <p className='text-[#f4b029] text-center text-4xl font-[Nuptial] !font-bold'>
          – Falta –
        </p>
        <CountDown />
        <p className='text-[#f4b029] text-center text-4xl font-[Nuptial] !font-bold'>
          Para el gran día
        </p>
      </Section>
      <Section className='py-10 flex flex-col items-center justify-center gap-6'>
        <p className='text-[#f4b029] text-center text-5xl font-[Nuptial] !font-bold'>
          – Ceremonia Religiosa –
        </p>
        <TimeIcon className='size-8 text-[#f4b029]' />
        <p className='text-[#f4b029] text-center text-xl bad-script-regular'>
          17:00 Hrs.
        </p>
        <p className='text-[#f4b029] text-center text-xl bad-script-regular'>
          Parroquia de la Santa Cruz y Divino Niño Jesus
        </p>
        <p className='text-[#f4b029] text-center text-base bad-script-regular'>
          Av. Pinos 5, Sta Cruz Buenavista, 72150 Heroica Puebla de Zaragoza, Pue.
        </p>
        <a 
          className='flex no-underline items-center gap-2 px-4 py-2 bg-[#f4b029] rounded-[8px] text-[#7B0001] font-bold hover:bg-[#e3a92b] transition uppercase'
          href="https://share.google/EqZvmokXyCxhKBcCF"
          target="_blank"
        >
          <LocationIcon className='size-8 text-[#7B0001]' />
          Abrir Mapa
        </a>
      </Section>
      <Section className='py-10 flex flex-col items-center justify-center gap-6'>
        <p className='text-[#f4b029] text-center text-5xl font-[Nuptial] !font-bold'>
          – Recepción –
        </p>
        <TimeIcon className='size-8 text-[#f4b029]' />
        <p className='text-[#f4b029] text-center text-xl bad-script-regular'>
          18:00 Hrs.
        </p>
        <p className='text-[#f4b029] text-center text-xl bad-script-regular'>
          Salón Polos
        </p>
        <p className='text-[#f4b029] text-center text-base bad-script-regular'>
          Av. Pinos 8-10, Sta Cruz Buenavista, 72150 Heroica Puebla de Zaragoza, Pue.
        </p>
        <a 
          className='flex no-underline items-center gap-2 px-4 py-2 bg-[#f4b029] rounded-[8px] text-[#7B0001] font-bold hover:bg-[#e3a92b] transition uppercase'
          href="https://maps.app.goo.gl/L6vmP9rFUmRqMLKq9"
          target="_blank"
        >
          <LocationIcon className='size-8 text-[#7B0001]' />
          Abrir Mapa
        </a>
      </Section>
    </main>
  )
}

function Section({ children, className }) {
  return (
    <section
      className="w-full bg-cover bg-fixed bg-center bg-no-repeat p-4 flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://miinvitacion.com.mx/wp-content/uploads/2024/02/fondo-new-rojo-3.png')",
        backgroundPosition: "50% 50%",
        backgroundSize: "200%",
      }}
    >
      <div className={`w-full p-3 bg-[#7B0001] ${className}`}>
        {children}
      </div>
    </section>
  );
}

export default App
