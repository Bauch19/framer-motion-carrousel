import { HeartIcon } from "./icon";

export default function TimeLine() {
  return (
    <ul className="timeline timeline-vertical">
      <li>
        <div className="timeline-start w-full bg-[#f4b0291a] p-4 rounded-[4px] flex flex-col gap-5">
          <p className='text-[#f4b029] text-center text-xl font-[Ananda] !font-bold'>
            Ceremonia Religiosa
          </p>
          <p className='text-[#f4b029] text-center text-xl bad-script-regular'>
            18:00 Hrs.
          </p>
        </div>
        <div className="timeline-middle">
          <div className="rounded-full bg-[#f4b029] text-white p-1">
            <HeartIcon className="h-5 w-5" />
          </div>
        </div>
        <hr className="bg-white" />
      </li>
      <li>
        <hr className="bg-white" />
        <div className="timeline-middle">
          <div className="rounded-full bg-[#f4b029] text-white p-1">
            <HeartIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="timeline-end w-full bg-[#f4b0291a] p-4 rounded-[4px] flex flex-col gap-5">
          <p className='text-[#f4b029] text-center text-xl font-[Ananda] !font-bold'>
            Cena
          </p>
          <p className='text-[#f4b029] text-center text-xl bad-script-regular'>
            19:30 Hrs.
          </p>
        </div>
        <hr className="bg-white" />
      </li>
      <li>
        <hr className="bg-white" />
        <div className="timeline-start w-full bg-[#f4b0291a] p-4 rounded-[4px] flex flex-col gap-5">
          <p className='text-[#f4b029] text-center text-xl font-[Ananda] !font-bold'>
            Presentación de la Quinceañera
          </p>
          <p className='text-[#f4b029] text-center text-xl bad-script-regular'>
            21:00 Hrs.
          </p>
        </div>
        <div className="timeline-middle">
          <div className="rounded-full bg-[#f4b029] text-white p-1">
            <HeartIcon className="h-5 w-5" />
          </div>
        </div>
      </li>
    </ul>
  );
}
