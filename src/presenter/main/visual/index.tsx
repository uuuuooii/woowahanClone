import { useState, useRef, useEffect, FC, SetStateAction } from "react";
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

  const goToSlide = (slideIdx: SetStateAction<number>) => {
    setCurrentSlide(slideIdx);
  };

  useEffect(() => {
    setCurrentSlide(1);
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
              <V.Box>
                <V.Picture key={index}>
                  <V.Img src={VisualImage[currentSlide].images} alt="image" />
                  <V.Content>
                    <V.Title>
                      {
                        VisualImage.filter((item) => item.title === item.title)[
                          currentSlide
                        ].title
                      }
                    </V.Title>
                    <V.Desc>{VisualImage[currentSlide].desc}</V.Desc>

                    <V.Button>{VisualImage[currentSlide].link}</V.Button>
                  </V.Content>
                </V.Picture>
                <V.SliderButtonBox>
                  {VisualImage.map((slide, slideIdx) => {
                    return (
                      <button
                        key={slideIdx}
                        onClick={() => goToSlide(slideIdx)}
                      >
                        <V.SliderButton>&#8226;</V.SliderButton>
                      </button>
                    );
                  })}
                </V.SliderButtonBox>
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
