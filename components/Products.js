import Link from "next/link"
import Image from 'next/image';
import SimpleSlider from "../components/Slider";
import { GrReactjs  } from 'react-icons/gr';
import { RiFlutterFill  } from 'react-icons/ri';
import { SiAngular ,SiHtml5 ,SiCss3,SiJquery,SiJavascript } from 'react-icons/si';



const products = [{
    title: 'Popular',
    items: [{
        name: "Volume Manager",
        image: "#",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "Volume Manager2",
        image: "#",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "Volume Manager3",
        image: "#",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    }

    ]
}, {
    title: 'Apps',
    items: [{
        name: "Volume Manager",
        image: "",
        link: "#",
        text: 'Audio volume control for Chrome™. Set volume level for each tab separately with audio control and sound booster.',
    },
    {
        name: "Volume Manager2",
        image: "",
        link: "#",
        text: 'Audio volume control for Chrome™. Set volume level for each tab separately with audio control and sound booster.',

    },
    {
        name: "Volume Manager3",
        image: "",
        link: "#",

        text: 'Audio volume control for Chrome™. Set volume level for each tab separately with audio control and sound booster.',
    },
    {
        name: "Volume Manager",
        image: "",
        link: "#",

        text: 'Audio volume control for Chrome™. Set volume level for each tab separately with audio control and sound booster.',
    },
    {
        name: "Volume Manager",
        image: "",
        link: "#",

        text: 'Audio volume control for Chrome™. Set volume level for each tab separately with audio control and sound booster.',
    },
    {
        name: "Volume Manager",
        image: "",
        link: "#",

        text: 'Audio volume control for Chrome™. Set volume level for each tab separately with audio control and sound booster.',
    },
    {
        name: "Volume Manager",
        image: "",
        link: "#",

        text: 'Audio volume control for Chrome™. Set volume level for each tab separately with audio control and sound booster.',
    }

    ]
},
{
    title: 'Sites',
    items: [{
        name: "Watersportgps",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "Watersportgps",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'
    },


    ]
},
{
    title: 'Extensions',
    items: [{
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",
        text:'Grow your Instagram account. You can easily gain up to 8000 followers a month with Liker.'

    },
    ]
}
]
const tehnology =[{
    text: "React",
    icon:<GrReactjs />
    
},
{
    text: "Fluter",
    icon:<RiFlutterFill />
},
{
    text: "Angular",
    icon:<SiAngular />
},
{
    text: "Html",
    icon:<SiHtml5 />
},
{
    text: "Css",
    icon:<SiCss3 />
},
{
    text: "JavaScript",
    icon:<SiJavascript />
},
{
    text: "Jquery",
    icon:<SiJquery />
}

]

export default function Products(props) {
    return (

        <div className="relative mt-16 max-w-[1140px] m-auto">
            <div className="point-top"></div>
                <div className="grid   md:grid-cols-4 grid-cols-2  gap-y-[20px] gap-x-[15px]  lg:justify-between  lg:flex  ">
                    {tehnology.map(item=>
                        <div key={item}  className="cursor-pointer transition-all duration-300 flex items-center justify-center border border-[e5efff] py-1 text-[18px] lg:px-7 md:px-5 px-5 text-center rounded-full  bg-white shadow-[12px_14px_0px_0_rgba(229,237,250,1)] hover:scale-105  ">
                            <div className="mr-1 pb-[2px]">{item.icon}</div>
                            <p className="box-border  ">{item.text}</p>

                        </div>
                    )}
                </div>
               
                {products.map(item =>
                    <div key={item} className=" mt-5">
                        <h2 className=" text-[32px] text-[#2c2d2d] leading-[48px] font-semibold  mb-5 mt-20 ">{item.title}</h2>
                        <div className={item.title==='Popular'? " popular relative ": " relative "}>
                            <SimpleSlider popular={item.title == 'Popular'} title={item.title} data={item.items} />
                        </div>
                    </div>

                )}

            <div className="point-down"></div>
        </div>
    )
}


