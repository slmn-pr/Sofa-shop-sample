import Image from 'next/image'
import React from 'react'

const SofaSliderItem = ({ imageSrc, price }) => {
    return (
        <div className='w-[250px] min-h-[170px] max-h-[170px] border shadow-xl relative bg-white rounded-xl'>


            {/* Image */}
            <div className="absolute -top-[48px] left-1/2 -translate-x-1/2  size-24 ">
                <Image
                    className="object-contain"
                    src={imageSrc}
                    width={200}
                    height={200}
                    alt="Furniture" />
            </div>



            {/* Price */}
            <div className="pb-5 absolute bottom-2 text-center w-full ">

                <p className="text-center font-bold"> $&nbsp; {price}</p>

            </div>

        </div>
    )
}

export default SofaSliderItem   