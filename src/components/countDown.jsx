import { useState, useEffect } from "react";

export default function CountDown({ counter, date = new Date("2025-12-13T17:00:00") }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const difference = date - now;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return(
    <div className="grid grid-cols-4 gap-2">
      <div className="flex flex-col w-full justify-center items-center text-center p-2 bg-[#f4b029] rounded-box text-[#7B0001] aboreto-regular">
        <span className="countdown aboreto-regular text-5xl">
          <span style={{ "--value": days }} aria-live="polite" aria-label={days}>{days}</span>
        </span>
        <span className="text-xs md:text-base ">
          días
        </span>
      </div>
      <div className="flex flex-col w-full justify-center items-center text-center p-2 bg-[#f4b029] rounded-box text-[#7B0001] aboreto-regular">
        <span className="countdown aboreto-regular text-5xl">
          <span style={{ "--value": hours }} aria-live="polite" aria-label={hours}>{hours}</span>
        </span>
        <span className="text-xs md:text-base ">
          horas
        </span>
      </div>
      <div className="flex flex-col w-full justify-center items-center text-center p-2 bg-[#f4b029] rounded-box text-[#7B0001] aboreto-regular">
        <span className="countdown aboreto-regular text-5xl">
          <span style={{ "--value": minutes }} aria-live="polite" aria-label={minutes}>{minutes}</span>
        </span>
        <span className="text-xs md:text-base ">
          minutos
        </span>
      </div>
      <div className="flex flex-col w-full justify-center items-center text-center p-2 bg-[#f4b029] rounded-box text-[#7B0001] aboreto-regular">
        <span className="countdown aboreto-regular text-5xl">
          <span style={{ "--value": seconds }} aria-live="polite" aria-label={seconds}>{seconds}</span>
        </span>
        <span className="text-xs md:text-base ">
          segundos
        </span>
      </div>
    </div>
  )
}