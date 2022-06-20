import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';

export default function Slide(props) {
       
     
  return (
            <Link href={props.link}>
            <div className=" h-[240px] border-[#e5efff] border cursor-pointer mr-6  bg-white  rounded-lg shadow-[12px_14px_0px_0_rgba(229,237,250,1)] hover:scale-105 duration-500">
                <div className="  hover:rounded-lg z-10 absolute w-[150px] h-[240px]  hover:bg-[url('https://play-lh.googleusercontent.com/RCRt7C0T50dmpQ4ZxtTe2m0Vb6RfBuw_m8BoT98Y3-kGakb6O3etEYkPgcHIZfo8jCDp=w526-h296-rw')] hover:bg-no-repeat bg-cover "  ></div>
               <div className="">
              <div className="flex justify-center mt-[5px]">
                
              <Image className="" src="https://lh3.googleusercontent.com/OWA2r0muthKmFPz_V1vQ59BiYXBriIWsFsjKSuglq62iG8VB5k6RTZsA6RmJlWhbnUKB1Pjh8C4=w128-h128-e365" width={100} height={100} />
              </div>
                <div className="text-center mt-4 text-[18px] text-[#071e55]">{props.name}</div>
                <p className="text-[#7c8595] text-sm text-center px-1 mt-2">{props.text}</p>
               </div>
          </div>
          </Link>
  );
}
