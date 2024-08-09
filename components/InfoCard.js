import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
export default function InfoCard({
  img,
  name,
  location,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80  flex-shrink-0">
        <Image alt="image" fill src={img} className="object-cover rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className=" flex justify-between">
          <p className="">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{name}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm  text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end">
          <div className="flex items-center">
            <StarIcon className="h-6  text-red-400" />
            {star}
          </div>

          <div>
            <p className="text-lg  lg:text-2xl font-semibold pb-2 ">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
