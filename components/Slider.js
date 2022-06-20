import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import Slide from "./Slide";

export default function SimpleSlider(props) {
        var settings = {
        infinite: false,
        draggable:false,
        slidesToShow: props.popular?2:6,
      };
     
  return (
      <Slider {...settings}>
        {props.data.map((item2) => (
            <Slide {...item2}/>
        ))}
      </Slider>
    
  );
}
