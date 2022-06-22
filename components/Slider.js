import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import Slide from "./Slide";

export default function SimpleSlider(props) {
        var settings = {
        infinite: false,
        initialSlide: 2,
        draggable:false,
        slidesToShow: props.popular?2:4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:  props.popular?2:3,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:  props.popular?1:2,
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: props.popular?1:1,
             
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      };
     
  return (
      <Slider {...settings}>
        {props.data.map((item2) => (
            <Slide key={item2} {...item2} popular={props.title === "Popular"}/>
        
        ))}
      </Slider>
    
  );
}
