import Image from "next/image";
import logo from "./assets/logo.png"
import { MagnifyingGlassIcon , GlobeAltIcon ,Bars2Icon , UserCircleIcon } from "@heroicons/react/24/outline"

export default function HeaderComponent(){
    return(
         <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
              <div className="relative flex items-center h-10 cursor-pointer my-auto ">
                   <Image alt="logo airbnb" fill src={logo} className="object-contain object-left"/>
              </div>

              <div className="flex items-center md:border-2 md:shadow-md rounded-full py-2">
                   <input className="flex-grow  bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-400" type="text"  placeholder="start  your search "/>
                   <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer md:mx-2"/>
              </div>
              <div className="flex items-center space-x-4 justify-end">
                 <p> Become a host </p>
                 <GlobeAltIcon  className="h-6"/>

                 <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <Bars2Icon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                 </div>
              </div>
         </div>
    )
}