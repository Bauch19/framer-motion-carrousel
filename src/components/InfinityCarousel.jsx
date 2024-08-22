"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InfinityCarousel = () => {
  const [select, setSelect] = useState(1);
  const [currentIndex, setCurrentIndex] = useState('');
  const [direction, setDirection] = useState('');

  const handleSelect = (id) => {
    if(id < select){
      setDirection('left');
    }else{
      setDirection('right');
    }
    setSelect(id);
  };

  const handlePrev = () => {
    setDirection('left');
    setSelect((idx) => ((idx + 1) % 3));
  }

  const handleNext = () => {
    setDirection('right');
    setSelect((idx) => ((idx - 1 + 3) % 3));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSelect((idx) => ((idx + 1) % 3));
    }, 15000);

    return () => clearInterval(interval);
  }, [select]);

  function handleVideo(select){
    if(select == 0) return "/videos/video-about-1.mp4";
    if(select == 1) return "/videos/video-about-2.mp4";
    if(select == 2) return "/videos/video-about-3.mp4";
    return "/videos/video-about-1.mp4";
  }

  return (
    <>
    <div className="w-full h-full md:h-[300px] lg:h-[500px] py-10 md:py-0 px-5 md:px-6 xl:px-0 overflow-hidden relative">
      <motion.div 
        className='w-full h-full hidden md:flex justify-center items-center gap-3'
      >
        <AnimatePresence initial>
          {select == 0 && (
            <VideoItem
              key={'item-3'}
              src={'/videos/video-about-3.mp4'}
              styleVideo={'scale-[1.15]'}
              isActive={select === 2}
              onClick={() => handleSelect(2)}
            />
          )}
          {select != 2 && (
            <VideoItem
              key={'item-1'}
              src={'/videos/video-about-1.mp4'}
              isActive={select === 0}
              onClick={() => handleSelect(0)}
            />
          )}
            <VideoItem
              key={'item-2'}
              src={'/videos/video-about-2.mp4'}
              isActive={select === 1}
              onClick={() => handleSelect(1)}
            />
          {select != 0 && (
            <VideoItem
              key={'item-3'}
              src={'/videos/video-about-3.mp4'}
              styleVideo={'scale-[1.15]'}
              isActive={select === 2}
              onClick={() => handleSelect(2)}
            />
          )}
          {select == 2 && (
            <VideoItem
              key={'item-1'}
              src={'/videos/video-about-1.mp4'}
              isActive={select === 0}
              onClick={() => handleSelect(0)}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        <div className='aspect-[345/503] overflow-hidden rounded-[20px] relative md:hidden'>
          <VideoThumbnail select={select}/>
        </div>
        <div className='flex gap-3 justify-center items-center mt-10'>
          <Controls 
            src={"/videos/video-about-1.mp4"}
            isActive={select == 0}
            onClick={() => handleSelect(0)}
          />
          <Controls 
            src={"/videos/video-about-2.mp4"}
            isActive={select == 1}
            onClick={() => handleSelect(1)}
          />
          <Controls 
            src={"/videos/video-about-3.mp4"}
            styleVideo={'scale-[1.15]'}
            isActive={select == 2}
            onClick={() => handleSelect(2)}
          />
        </div>
      </AnimatePresence>
    </div>
    <div className='w-full h-fit flex justify-center items-center gap-2'>
        <button 
            className={`aspect-square w-3 h-auto rounded-full transition-all ${select == 0 ? 'bg-[#E1A141]' : 'bg-[#D4D4D4]'}`} 
            onClick={() => handleSelect(0)}
        />
        <button 
            className={`aspect-square w-3 h-auto rounded-full transition-all ${select == 1 ? 'bg-[#E1A141]' : 'bg-[#D4D4D4]'}`} 
            onClick={() => handleSelect(1)}
        />
        <button 
            className={`aspect-square w-3 h-auto rounded-full transition-all ${select == 2 ? 'bg-[#E1A141]' : 'bg-[#D4D4D4]'}`} 
            onClick={() => handleSelect(2)}
        />
    </div>
    </>
  )
};

function VideoItem({ isActive = false, src, styleVideo, ...res }){
  const videRef = useRef(null);

  const variantsItems = {
    active: { width: '66%', },
    inactive: { width: '17%', },
  };

  useEffect(() => {
    if(isActive){
      videRef?.current?.play();
    }
    return () => videRef?.current?.pause();
  }, [isActive]);

  return(
    <AnimatePresence>
      <motion.button 
        variants={variantsItems}
        initial={{ width: 0 }}
        animate={isActive ? 'active' : 'inactive'}
        exit={{ width: 0 }}
        transition={{ type: "tween", duration: 0.6, }}
        className={`w-full h-full overflow-hidden rounded-[20px] relative flex justify-center p-0 border-0 items-center text-white`}
        {...res}
      >
        <video ref={videRef} className={`w-full h-full object-cover ${styleVideo ?? ''}`} loop muted controls={false} playsInline>
          <source src={src} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        {isActive && (
          <motion.div className='w-[100px] h-2 rounded-full bg-[#D9D9D980] overflow-hidden absolute z-[2] bottom-4 right-4'>
          <motion.div
            initial={{ translateX: '-100%' }}
            animate={{ translateX: '0%' }}
            transition={{ ease: 'linear', duration: 15 }}
            className='bg-[#434343] w-[100px] h-2'
          />
          </motion.div>
        )}
      </motion.button>
    </AnimatePresence>
  )
}

function VideoThumbnail({ select }){
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  useEffect(() => {
    if(select == 0) {
      video1Ref?.current?.play();
      video2Ref?.current?.pause();
      video3Ref?.current?.pause();
    }
    if(select == 1) {
      video2Ref?.current?.play();
      video1Ref?.current?.pause();
      video3Ref?.current?.pause();
    }
    if(select == 2) {
      video3Ref?.current?.play();
      video2Ref?.current?.pause();
      video1Ref?.current?.pause();
    }
    return () => {
      video1Ref?.current?.pause();
      video2Ref?.current?.pause();
      video3Ref?.current?.pause();
    }
  }, [select]);

  const variants = {
    active: { opacity: 1, },
    inactive: { opacity: 0, },
  }

  return(
    <>
    {select == 0 && (
      <motion.div className='w-[100px] h-2 rounded-full bg-[#D9D9D980] overflow-hidden absolute z-[2] bottom-3 left-1/2 -translate-x-1/2'>
        <motion.div
          initial={{ translateX: '-100%' }}
          animate={{ translateX: '0%' }}
          transition={{ ease: 'linear', duration: 15 }}
          className='bg-[#434343] w-[100px] h-2'
        />
      </motion.div>
    )}
    {select == 1 && (
      <motion.div className='w-[100px] h-2 rounded-full bg-[#D9D9D980] overflow-hidden absolute z-[2] bottom-3 left-1/2 -translate-x-1/2'>
        <motion.div
          initial={{ translateX: '-100%' }}
          animate={{ translateX: '0%' }}
          transition={{ ease: 'linear', duration: 15 }}
          className='bg-[#434343] w-[100px] h-2'
        />
      </motion.div>
    )}
    {select == 2 && (
      <motion.div className='w-[100px] h-2 rounded-full bg-[#D9D9D980] overflow-hidden absolute z-[2] bottom-3 left-1/2 -translate-x-1/2'>
        <motion.div
          initial={{ translateX: '-100%' }}
          animate={{ translateX: '0%' }}
          transition={{ ease: 'linear', duration: 15 }}
          className='bg-[#434343] w-[100px] h-2'
        />
      </motion.div>
    )}
    {select == 0 && (
      <motion.div 
      variants={variants}
      initial="inactive"
      animate={select == 0 ? 'active' : 'inactive'}
      exit={'inactive'}
      transition={{ duration: 0.7, }}
      className='flex gap-4 w-full h-full absolute rounded-[20px] overflow-hidden z-[1]'
    >
      <video key={'video-1-movil'} ref={video1Ref} className="w-full h-full object-cover rounded-[20px]" loop muted controls={false} playsInline>
        <source src={"/videos/video-about-1.mp4"} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </motion.div>
    )}
    {select == 1 && (
      <motion.div 
      variants={variants}
      initial="inactive"
      animate={select == 1 ? 'active' : 'inactive'}
      exit={'inactive'}
      transition={{ duration: 0.7, }}
      className='flex gap-4 w-full h-full absolute rounded-[20px] overflow-hidden z-[1]'
    >
      <video key={'video-2-movil'} ref={video2Ref} className="w-full h-full object-cover rounded-[20px]" loop muted controls={false} playsInline>
        <source src={"/videos/video-about-2.mp4"} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </motion.div>
    )}
    {select == 2 && (
      <motion.div 
      variants={variants}
      initial="inactive"
      animate={select == 2 ? 'active' : 'inactive'}
      exit={'inactive'}
      transition={{ duration: 0.7, }}
      className='flex gap-4 w-full h-full absolute rounded-[20px] overflow-hidden z-[1]'
    >
      <video key={'video-3-movil'} ref={video3Ref} className="w-full h-full object-cover rounded-[20px] scale-[1.15]" loop muted controls={false} playsInline>
        <source src={"/videos/video-about-3.mp4"} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </motion.div>
    )}
    </>
  )
}

function Controls({ src, isActive, className, styleVideo, ...res }){
  const videoRef = useRef(null);

  useEffect(() => {
    if(isActive){
      videoRef?.current?.play();
    }
    return () => videoRef?.current?.pause();
  }, [isActive]);

  const variants = {
    active: { opacity: 1, },
    inactive: { opacity: 0.5, },
  }

  return(
    <motion.button
      variants={variants}
      initial='inactive'
      animate={isActive ? 'active' : 'inactive'}
      transition={{  }}
      className={`w-[101px] h-[84px] bg-[#f7f7f7] rounded-lg overflow-hidden relative ${className ?? ''}`} {...res}
    >
      {isActive && (
        <motion.div className='w-[101px] h-[84px] overflow-hidden absolute z-[2]'>
        <motion.div
          initial={{ translateX: '-100%' }}
          animate={{ translateX: '0%' }}
          transition={{ ease: 'linear', duration: 15 }}
          className='w-full h-full bg-[#434343A6]'
        />
        </motion.div>
      )}
      <video ref={videoRef} className={`w-full h-full object-cover z-[1] ${styleVideo ?? ''}`} loop muted controls={false} playsInline>
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </motion.button>
  )
}

export default InfinityCarousel;
