import React from 'react'
import { FaCircleChevronRight } from "react-icons/fa6";
import Image from "next/image"
import SofaSliderItem from '../Components/SofaSliderItem';

const slides = [
  { image: "/images/products/4.png", price: 145.60 },
  { image: "/images/products/5.png", price: 265.50 },
  { image: "/images/products/6.png", price: 160.00 },
]


const SofaSlider = () => {
  return (
    <section className="flex justify-between w-full h-full items-center ">


      <span className="-rotate-90 text-2xl font-bold">Featired</span>


      {/* Images 👌 */}
      <div className="flex">

        {slides.map((slide, index) => (
          <div className="mx-12" key={index}>
            <SofaSliderItem imageSrc={slide.image} price={slide.price} />
          </div>
        ))}

      </div>


      {/* Next button ⏭️ */}
      <button className="size-5 text-5xl">
        <FaCircleChevronRight />

      </button>



    </section>
  )
}

export default SofaSlider