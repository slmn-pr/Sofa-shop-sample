import Image from 'next/image'
import React from 'react'

const TopFirstSection = () => {
    return (
        <section className="w-full h-96 flex justify-between">



            {/* Product detail */}
            <div className="w-1/2 flex flex-col  justify-center">

                {/* Description 😘 */}
                <div>
                    <h3 className="text-3xl font-extrabold">Exotic minimal <br /> furnitures.</h3>

                    <p className='mt-4 font-semibold'>Choose from wide of range well-carfted premium <br /> quality wooden furniture online.</p>
                </div>



                {/* Explore button 🧨 */}
                <div className='mt-10'>

                    <button className='bg-slate-950 px-5 py-3 rounded   '>

                        <span className="text-white">EXPLORE</span>
                    </button>


                </div>


            </div>

            {/* Product image */}
            <div className="w-1/2   flex justify-end">





                <div className=' flex translate-x-[calc(100%-400px)]'>

                    {/* Sofa 🛋️ */}
                    <Image
                        src="/images/products/1.png"
                        alt="Product 1"
                        width={300}
                        height={200}
                        className='-translate-x-12'
                        

                    />

                    {/* Leaf 🌿 */}
                    <Image src="/images/products/leaf.png"
                        alt="Leaf"
                        width={300}
                        height={300}
                        className="rotate-12 object-contain" />
                </div>

            </div>



        </section>
    )
}

export default TopFirstSection