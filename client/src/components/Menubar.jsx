import React from "react";
import Logo from "../image/clock.png";

function Menubar(){
    return(
    <><div className="bg-[#146C94]"> 
    <div className="flex justify-between items-center h-[70px] bg-[#146C94] text-white container mx-auto px-[5px]">
        <div className="flex items-center">
            <img src={Logo} className="mx-5" alt="" width="50px"/>
            <h1 className="text-[40px] font-semibold">
            Study Alarmer
            </h1>
        </div>
        <ul className="text-[18px] flex gap-10 justify-between ">
            <li className="rounded-full hover:text-[#62CDFF] hover:underline underline-offset-4">
                <a href="/">HOME</a>
            </li>
            <li className="rounded-full hover:text-[#62CDFF] hover:underline underline-offset-4">
                <a href="/class">CLASS SCHEDULE</a>
            </li>
            <li className="rounded-full hover:text-[#62CDFF] hover:underline underline-offset-4">
                <a href="/homework">HOMEWORK</a>
            </li>
            <li className="rounded-full hover:text-[#62CDFF] hover:underline underline-offset-4">
                <a href="/check">CHECK</a>
            </li>
            <li className="rounded-full hover:text-[#62CDFF] hover:underline underline-offset-4">
                <a href="/contact">CONTACT</a>
            </li>
        </ul>
    </div>
    </div>
    </>
    );
}

export default Menubar;