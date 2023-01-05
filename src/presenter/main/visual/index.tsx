import { useState, useRef, useEffect, FC } from "react";
import { VisualImage } from "../../../container/main/visualImg";
import * as V from "./styled";

const Visual: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = VisualImage.length;
  const silderRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    if (!silderRef.current) return;
    if (currentSlide === 0) {
      silderRef.current.style.transition = "none";
    } else {
      silderRef.current.style.transition = "all 0.5s ease";
    }
    silderRef.current.style.marginLeft = `-${currentSlide}00vw`;
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    if (!silderRef.current) return;
    silderRef.current.style.marginLeft = `-${currentSlide}00vw`;
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoScroll = true;
  let slideInterval: string | number | NodeJS.Timeout | undefined;
  let intervalTime = 6000;

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <V.Slider>
        <V.Article ref={silderRef}>
          {VisualImage.map((item, index) => {
            return (
              <V.Box key={index}>
                <V.Picture key={index}>
                  <V.Img src={item.images} alt="image" />
                  <V.Content>
                    <V.Title>{item.title}</V.Title>
                    <V.Desc>{item.desc}</V.Desc>
                    <V.Button>{item.link}</V.Button>
                    <button onClick={prevSlide}> 1 </button>
                    <button onClick={nextSlide}> 2 </button>
                    <button> 3 </button>
                    <button onClick={nextSlide}> 4 </button>
                    <button onClick={nextSlide}> 5 </button>
                  </V.Content>
                </V.Picture>
              </V.Box>
            );
          })}
        </V.Article>
      </V.Slider>
    </>
  );
};

export default Visual;
function handleSlider(count: number) {
  throw new Error("Function not imple <button>옆</button>mented.");
}
