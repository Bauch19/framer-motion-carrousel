import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './App.css'

const imgs = [
  'https://images.unsplash.com/photo-1468898203265-d5b5601865c7?q=80&w=2994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1476673661721-ee798b115c3f?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1526066843114-f1623fde3476?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

function ImgComponent({ src, alt, isActive = false, ...res }){
  const variants = {
    active: { width: '50%', },
    inactive: { width: '25%', },
    exit: { width: 0, },
  }
  return(
    <motion.img 
      variants={variants}
      initial='exit'
      animate={isActive ? 'active' : 'inactive'}
      exit='exit'
      transition={{ ease: 'linear', duration: 2.5 }}
      src={src}
      alt={alt}
      className='w-full h-[500px] object-cover object-center hover:cursor-pointer'
      {...res}
    />
  )
}

function App() {
  const [select, setSelect] = useState(0);
  return (
    <>
      <h1 className='py-5 font-bold text-5xl'>Carrousel de imagenes con Framer Motion</h1>
      <div className='w-full px-5 flex justify-center items-center gap-5'>
        <AnimatePresence initial={true}>
          {select == 0 && (
            <ImgComponent 
              src={imgs[2]}
              alt={'img 2'}
              isActive={select == 2}
              onClick={() => setSelect(2)}
            />
          )}
          {select == 1 && (
            <ImgComponent 
              src={imgs[0]}
              alt={'img 0'}
              isActive={select == 0}
              onClick={() => setSelect(0)}
            />
          )}
          {select == 0 && (
            <ImgComponent 
              src={imgs[0]}
              alt={'img 0'}
              isActive={select == 0}
              onClick={() => setSelect(0)}
            />
          )}
          <ImgComponent 
            src={imgs[1]}
            alt={'img 1'}
            isActive={select == 1}
            onClick={() => setSelect(1)}
          />
          {select == 1 && (
            <ImgComponent 
              src={imgs[2]}
              alt={'img 2'}
              isActive={select == 2}
              onClick={() => setSelect(2)}
            />
          )}
          {select == 2 && (
            <ImgComponent 
              src={imgs[2]}
              alt={'img 2'}
              isActive={select == 2}
              onClick={() => setSelect(2)}
            />
          )}
          {select == 2 && (
            <ImgComponent 
              src={imgs[0]}
              alt={'img 0'}
              isActive={select == 0}
              onClick={() => setSelect(0)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
