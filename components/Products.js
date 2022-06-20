import Link from "next/link"
import Image from 'next/image';
import SimpleSlider from "../components/Slider";


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

export default function Products(props) {
    return (

        <div className="relative z-">
            <div className="point-top"></div>
            <div className="max-w-[1140px] m-auto z-10 relative" >
               
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


