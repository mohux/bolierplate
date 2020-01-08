import React from "react";
import { Card } from "reactstrap";
import Slider from "react-slick";
import "./styles/sliderSection.scss";
const slides = [
  {
    image: "/images/sample.jpg",
    title: "Card Title",
    description: "Card description"
  },
  {
    image: "/images/sample.jpg",
    title: "Card Title2",
    description: "Card description"
  },
  {
    image: "/images/sample.jpg",
    title: "Card Title3",
    description: "Card description"
  },
  {
    image: "/images/sample.jpg",
    title: "Card Title4",
    description: "Card description"
  },
  {
    image: "/images/sample.jpg",
    title: "Card Title5",
    description: "Card description"
  },
  {
    image: "/images/sample.jpg",
    title: "Card Title6",
    description: "Card description"
  }
];

const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3
  };
  return (
    <section dir="ltr" className="overflow-hidden slider-section">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <Card key={idx}>
            <img className="img-fluid" src={slide.image} alt={slide.title} />
            <div className="py-3 px-2">
              <h3>{slide.title}</h3>
              <p className="lead">{slide.description}</p>
            </div>
          </Card>
        ))}
      </Slider>
    </section>
  );
};

export default SliderSection;
