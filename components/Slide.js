import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

export default function Slide(props) {
  return (
<>
{props.popular?<Link href={props.link}>
<div
  className={
       " relative h-[240px] border-[#e5efff] border cursor-pointer mr-6  bg-white  rounded-lg shadow-[12px_14px_0px_0_rgba(229,237,250,1)] hover:scale-105 duration-500"
  }
>
  <div className="  hover:rounded-lg z-50  absolute  w-full  h-full  hover:bg-[url('https://lh3.googleusercontent.com/YPZnLr4_t87MW2Dj2obS0nLYxA2hL-4g-uBhyED3r0ZqjQqkEZmUYDFA1Br5lhlgTUc8G6PJ1A=w440-h280-e365')] hover:bg-no-repeat bg-cover "></div>
  <div className=" flex items-center h-full">
    <div
      className={
          "flex justify-center flex-col"
      }
    >
      <div
        className={
          "m-auto"
        }
      >
        <Image
          className=""
          src="https://lh3.googleusercontent.com/OWA2r0muthKmFPz_V1vQ59BiYXBriIWsFsjKSuglq62iG8VB5k6RTZsA6RmJlWhbnUKB1Pjh8C4=w128-h128-e365"
          width={100}
          height={100}
        />
      </div>
      <div >
        <div
          className={
               " text-center text-[24px] font-semibold text-[#071e55]"
          }
        >
          {props.name}
        </div>
        <p
          className={
      
               " text-center text-[#7c8595] text-sm  px-5 mt-2"
        
          }
        >
          {props.text}
        </p>
      </div>
    </div>
  </div>
</div>
</Link>:
<Link href={props.link}>
      <div
        className={
           " relative h-[130px] border-[#e5efff] border cursor-pointer mr-6  bg-white  rounded-lg shadow-[12px_14px_0px_0_rgba(229,237,250,1)] hover:scale-105 duration-500"
        }
      >
        <div className="  hover:rounded-lg z-10 absolute w-full h-full  hover:bg-[url('https://lh3.googleusercontent.com/YPZnLr4_t87MW2Dj2obS0nLYxA2hL-4g-uBhyED3r0ZqjQqkEZmUYDFA1Br5lhlgTUc8G6PJ1A=w440-h280-e365')] hover:bg-no-repeat bg-cover "></div>
        <div className=" flex items-center h-full">
          <div
            className={
               " ml-2"
            }
          >
            <div
              className={
                 "flex items-center justify-around "
              }
            >
              <Image
                className=""
                src="https://lh3.googleusercontent.com/OWA2r0muthKmFPz_V1vQ59BiYXBriIWsFsjKSuglq62iG8VB5k6RTZsA6RmJlWhbnUKB1Pjh8C4=w128-h128-e365"
                width={70}
                height={70}
              />
               <div
                className={
                   " cut-text text-[24px] ml-2 font-semibold text-[#071e55]"
                }
              >
                {props.name}
              </div>
            </div>
            <div className="mt-1" >
             
              <p
                className={
                   "text-[#7c8595] text-sm mx-2  mt-2"
                }
              >
                {props.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>}
</>
    
  );
}
