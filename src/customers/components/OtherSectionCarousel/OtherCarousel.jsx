import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSection from "../HomeSection/HomeSection";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Slider from "react-slick";

const OtherCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: {
            items: 1,
        },
        720: {
            items: 3,
        },
        1024: {
            items: 5.5,
            itemsFit: "contain",
        },
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item) => <HomeSection product={item}  />);

    return (
        <div className="border">
          <h2 className="text2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <ArrowBackIosNewIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slidePrev}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="prev"
                    >
                        <ArrowBackIosNewIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
                console.log(activeIndex)
            </div>
        </div>
    );
};

export default OtherCarousel;
