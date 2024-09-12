import React, { useState } from 'react'
import './Carrousel.scss'
import ArrowBack from '../../assets/arrow_back.png'
import ArrowForward from '../../assets/arrow_forward.png'

function Carrousel({ data }) {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    return (
        <div className="carrousel">
            {data.map((item, index) => {
                return (
                    <img
                        src={item}
                        alt={`Slider ${index + 1} du logement`}
                        key={index}
                        className={
                            slide === index ? 'slide' : 'slide slide-hidden'
                        }
                    />
                )
            })}
            <div className="container_next_prev_image">
                <i className="prev" onClick={prevSlide}>
                    <img src={ArrowBack} alt="arrow left" />
                </i>

                <i className="next" onClick={nextSlide}>
                    <img src={ArrowForward} alt="arrow right" />
                </i>
            </div>
            <span>
                {slide + 1}/{data.length}
            </span>
        </div>
    )
}

export default Carrousel
