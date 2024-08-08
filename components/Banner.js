import Image from "next/image";
import banner from "./assets/banner.jpg"


export default function Banner(){
    return(
        <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px]">
               <Image alt="banner" src={banner} fill className="object-cover " />


               <div className="absolute top-1/2 w-full text-center">
                   <p className=" text-sm sm:text-lg">Im avalaible not sure? perfect</p>

                   <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full  font-bold  my-auto hover:shadow-xl active:scale-90 transition duration-150 ">
                       Im flexible
                   </button>
               </div>
        </div>
    );
}