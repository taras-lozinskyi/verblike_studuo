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

    },
    {
        name: "Volume Manager2",
        image: "#",
        link: "#",

    },
    {
        name: "Volume Manager3",
        image: "#",
        link: "#",

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",

    },
    {
        name: "Volume Manager",
        image: "#",
        link: "#",

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

    },
    {
        name: "Watersportgps",
        image: "",
        link: "#",
    },


    ]
},
{
    title: 'Extensions',
    items: [{
        name: "InstaFly",
        image: "",
        link: "#",

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",

    },
    {
        name: "InstaFly",
        image: "",
        link: "#",

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

        <div className="relative z-">
            <div className="point-top"></div>
            <div className="max-w-[1140px] m-auto z-10 relative" >
                <div className="flex justify-between mt-16">
                    {tehnology.map(item=>
                        <div  className=" flex items-center   border border-[e5efff] py-1 text-[18px] px-10 rounded-full  bg-white shadow-[12px_14px_0px_0_rgba(229,237,250,1)] hover:scale-105  duration-50 s ">
                            <div className="mr-1 pb-[2px]">{item.icon}</div>
                            <p className="box-border  ">{item.text}</p>

                        </div>
                    )}
                </div>
               
                {products.map(item =>

                
                    <div className=" mt-5">
                        <h2 className="text-[32px] text-[#2c2d2d] leading-[48px] font-semibold  mb-5 mt-20">{item.title}</h2>
                        <div className="relative ">
                            <SimpleSlider popular={item.title == 'Popular'} data={item.items} />
                        </div>
                    </div>

                )}

            </div>
            <div className="point-down"></div>
        </div>
    )
}


