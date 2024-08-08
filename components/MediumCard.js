import Image from "next/image"

export default function MediumCard({img , name}){
    return(
        <div className="cursor-default hover:scale-105 transform transition duration-300 ease-out">
               <div className="relative h-80 w-80">
                  <Image alt="image"  src={img} fill className="rounded-xl"/>
               </div>
               <h3 className="text-2xl mt-3">{name}</h3>
        </div>
    );
}