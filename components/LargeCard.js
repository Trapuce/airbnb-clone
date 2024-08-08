import Image from "next/image"
import largeImage from "./assets/largeImage.jpg"

export default function LargeCard({ title , description ,buttonText}){
    return(
        <section className="relative py-16 cursor-pointer text-white ">
        <div className="relative h-96 min-w-[300px]:">
              <Image alt="image" src={largeImage}  fill className=" object-cover rounded-lg " unoptimized/>
        </div>
        <div className="absolute top-32 left-12">
            <h3 className="text-4xl  mb-3 w-64 ">{title}</h3>
            <p className="">{description}</p>


            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
        </div>
        </section>
    );
}