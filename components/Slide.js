import Link from "next/link";
import Image from "next/image";

export default function Slide(props) {
  var btnGroupClasses =
    "relative   border-[#e5efff] border cursor-pointer mr-6 px-[15px]  bg-white   rounded-lg shadow-[12px_14px_0px_0_rgba(229,237,250,1)] hover:scale-105 duration-1000 ";

  return (
    <Link href={props.link}>
      <div
        className={
          btnGroupClasses + (props.popular ? "h-[240px]" : " h-[130px]")
        }
      >
        <div className="rounded-lg z-50  absolute left-0 top-0 w-full  h-full  bg-[url('https://lh3.googleusercontent.com/YPZnLr4_t87MW2Dj2obS0nLYxA2hL-4g-uBhyED3r0ZqjQqkEZmUYDFA1Br5lhlgTUc8G6PJ1A=w440-h280-e365')] bg-no-repeat bg-cover transition-all  delay-100 opacity-0 hover:opacity-100"></div>
        <div className=" flex items-center h-full w-full">
          <div
            className={
              "flex justify-center flex-col h-full w-full items-center"
            }
          >
            <div className={"flex justify-center"}>
              <Image
                alt=""
                className=""
                src="https://lh3.googleusercontent.com/OWA2r0muthKmFPz_V1vQ59BiYXBriIWsFsjKSuglq62iG8VB5k6RTZsA6RmJlWhbnUKB1Pjh8C4=w128-h128-e365"
                width={100}
                height={100}
              />
            </div>
            <h2
              className={
                props.popular
                  ? "text-center  font-semibold mb-[15px] text-[#071e55] text-[24px]"
                  : " text-center mb-[15px] font-semibold text-[#071e55] text-[18px]"
              }
            >
              {props.name}
            </h2>
            {props.popular && (
              <p
                className={
                  props.popular
                    ? "text-center   text-[#7c8595] text-sm"
                    : " text-center   text-[#7c8595] text-xs"
                }
              >
                {props.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
