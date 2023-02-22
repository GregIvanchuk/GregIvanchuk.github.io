import styles from './Slider.module.css';
import React, { useState } from 'react';
function Slider({slides}) {
    const [currentIndex,setcurrentIndex]= useState(0);
    const goToPrevios = () =>{
      const  isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setcurrentIndex(newIndex);
    }

    const goToNext = () =>{
        const  isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setcurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setcurrentIndex(slideIndex);
    }
    return (
            <div  className={styles.sliderStyles}>
                    <div  className={styles.slideStyles} >
                        <img  src={slides[currentIndex].src}/>
                        <div className={styles.leftArrowStyles} onClick={goToPrevios}><img height={22} width={22} src="/images/larrow.png" alt="" /></div>
                        <div  className={styles.rightArrowStyles} onClick={goToNext}> <img height={22} width={22} src="/images/rarrow.png" alt="" /></div>
                    </div>
                    <div  className={styles.dotsContainer}>
              { slides.map((item,slideIndex)=><div onClick={() => goToSlide(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div>
                </div>
    )}
    export default Slider;