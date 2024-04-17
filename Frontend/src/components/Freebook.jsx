import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md-px-20 px-4">
      <div className="ml-5">
      <h1 className="font-semibold  mt-10 ml-10 text-xl pb-2">
          Free Offered Courses
        </h1>
        <p className="ml-10 mr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          reprehenderit. Magni, perferendis porro impedit eius nesciunt hic at
          nobis voluptate quod nisi molestias error dolor explicabo, voluptatem
          optio blanditiis aut?
        </p>
      </div>
      
      <div className="ml-12">
      <Slider {...settings}>
       {filterData.map((item) => (
        <Cards item ={item} key={item.id} />
       ))}
      </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook;
