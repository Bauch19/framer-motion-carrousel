import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './App.css'
import InfinityCarousel from './components/InfinityCarousel';

const imgs = [
  'https://images.unsplash.com/photo-1468898203265-d5b5601865c7?q=80&w=2994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1476673661721-ee798b115c3f?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1526066843114-f1623fde3476?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

function App() {
  const [select, setSelect] = useState(0);
  return (
    <>
      <h1 className='py-5 font-bold text-5xl'>Carrousel de imagenes con Framer Motion</h1>
      <div className='w-full px-5 flex flex-col justify-center items-center gap-5'>
        <InfinityCarousel />
      </div>
    </>
  )
}

export default App
