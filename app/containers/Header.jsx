import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GiSofa } from "react-icons/gi";

import NavbarItem from "../Components/NavbarItem";



const items = [
    { label: "Home", link: "/home" },
    { label: "Furniture", link: "/furniture" },
    { label: "Product", link: "/furniture" },
    { label: "Store", link: "/furniture" },
]


const Header = () => {
    return <header>

        <nav className="flex justify-between items-center h-12">

            {/* Logo section */}
            <div className="text-6xl flex items-center">
                <GiSofa /> <span className="tracking-[7px] text-[15px] font-bold  ml-3	">Wudo</span>

            </div>


            {/* Items section */}
            <div className="flex text-slate-950/80">

                <ul className="flex mr-5">
                    {items.map((item) => <NavbarItem key={item.label}>
                        {item.label}
                    </NavbarItem>)}
                </ul>

                <div className="flex *:text-2xl *:mr-10 *:cursor-pointer">

                    <span >
                        <FaMagnifyingGlass />
                    </span>


                    <span className="!mr-0" >
                        <FaCartShopping />
                    </span>
                </div>


            </div>


        </nav>


    </header>
}

export default Header