// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import Carousel from 'react-bootstrap/Carousel';

// // function Slider() {
// //   return (
// //     <Carousel style={{ width: '81%' }}>
// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src="https://zeussolutionsinc.com/wp-content/uploads/2022/05/1-1.jpg"
// //           alt="Second slide"
// //         />
// //         <Carousel.Caption>
// //           {/* <h3>Second slide label</h3>
// //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
// //         </Carousel.Caption>
// //       </Carousel.Item>

// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src="https://zeussolutionsinc.com/wp-content/uploads/2022/05/2-1.jpg"
// //           alt="Third slide"
// //         />
// //         <Carousel.Caption>
// //           {/* <h3>Third slide label</h3>
// //           <p>
// //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //           </p> */}
// //         </Carousel.Caption>
// //       </Carousel.Item>

// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src="https://zeussolutionsinc.com/wp-content/uploads/2022/05/3-1.jpg"
// //           alt="Third slide"
// //         />
// //         <Carousel.Caption>
// //           {/* <h3>Third slide label</h3>
// //           <p>
// //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //           </p> */}
// //         </Carousel.Caption>
// //       </Carousel.Item>

// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src="https://zeussolutionsinc.com/wp-content/uploads/2022/05/1-1.jpg"
// //           alt="Third slide"
// //         />
// //         <Carousel.Caption>
// //           {/* <h3>Third slide label</h3>
// //           <p>
// //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //           </p> */}
// //         </Carousel.Caption>
// //       </Carousel.Item>

// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src="https://zeussolutionsinc.com/wp-content/uploads/2022/05/2-1.jpg"
// //           alt="Third slide"
// //         />
// //         <Carousel.Caption>
// //           {/* <h3>Third slide label</h3>
// //           <p>
// //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //           </p> */}
// //         </Carousel.Caption>
// //       </Carousel.Item>
// //     </Carousel>
// //   );
// // }

// // export default Slider;

// // import '@coreui/coreui/dist/css/coreui.min.css';
// // import React from 'react';
// // import { CCarousel, CImage, CCarouselItem } from '@coreui/react';
// // import ReactImg from '../../assets/img/aaron-burden-QJDzYT_K8Xg-unsplash.jpg';

// // const Slider = () => {
// //   return (
// //     <div>
// //       <CCarousel controls indicators>
// //         <CCarouselItem>
// //           <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
// //         </CCarouselItem>

// //         <CCarouselItem>
// //           <CImage className="d-block w-100" src={ReactImg} alt="slide 2" />
// //         </CCarouselItem>

// //         <CCarouselItem>
// //           <CImage className="d-block w-100" src={ReactImg} alt="slide 3" />
// //         </CCarouselItem>
// //       </CCarousel>
// //     </div>
// //   );
// // };

// // export default Slider;

// import { useState } from 'react';

// const Slider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   let classAdded = `slideStyles slide-1`;
//   const goToSlide = (slideIndex) => {
//     classAdded = `slideStyles slide-${slideIndex}`;
//     setCurrentIndex(slideIndex);
//   };
//   // const slideStylesWidthBackground = {
//   //   ...slideStyles,
//   //   backgroundImage: `url(${slides[currentIndex].url})`,
//   // };

//   return (
//     <div class="sliderStyles">
//       <div>
//         <div onClick={goToPrevious} class="leftArrowStyles">
//           ❰
//         </div>
//         <div onClick={goToNext} class="rightArrowStyles">
//           ❱
//         </div>
//       </div>
//       <div class={classAdded}></div>
//       <div class="dotsContainerStyles">
//         {slides.map((slide, slideIndex) => (
//           <div
//             class="dotStyle"
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import { useState, useEffect, useRef, useCallback } from 'react';

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'all 0.3s',
};

const slidesContainerStyles = {
  display: 'flex',
  height: '100%',
  transition: 'transform ease-out 0.3s',
};

const slidesContainerOverflowStyles = {
  overflow: 'hidden',
  height: '100%',
};

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const sliderStyles = {
  position: 'relative',
  height: '100%',
};

const dotsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const dotStyle = {
  margin: '0 3px',
  cursor: 'pointer',
  fontSize: '20px',
};

const Slider = () => {
  const slides = [
    {
      url: 'https://zeussolutionsinc.com/wp-content/uploads/2022/05/1-1.jpg',
      title: 'boat',
    },
    {
      url: 'https://zeussolutionsinc.com/wp-content/uploads/2022/05/2-1.jpg',
      title: 'forest',
    },
    {
      url: 'https://zeussolutionsinc.com/wp-content/uploads/2022/05/3-1.jpg',
      title: 'city',
    },
    {
      url: 'https://zeussolutionsinc.com/wp-content/uploads/2022/05/1-1.jpg',
      title: 'italy',
    },
    {
      url: 'https://zeussolutionsinc.com/wp-content/uploads/2022/05/2-1.jpg',
      title: 'italy',
    },
  ];
  const containerStyles = {
    width: '50rem',
    height: '28rem',
    margin: '4rem auto',
  };
  return (
    <div>
      <div className="containerStyles">
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};

export default Slider;

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   backgroundImage: `url(${slides[currentIndex].url})`,
  // };

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
