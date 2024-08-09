import Image from "next/image";
import logo from "./assets/logo.png";
import {
  UsersIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useRouter } from "next/navigation";
import Search from "@/pages/Search";

export default function HeaderComponent({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [noGuests, setNoGuests] = useState(1);

  const resetInput = () => {
    setSearchInput("");
  };

  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/Search",
      query: {
        location: searchInput,
        startDate: state[0].startDate.toISOString(), 
        endDate: state[0].endDate.toISOString(),
        noGuests,
      },
    });
  };

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          alt="logo airbnb"
          fill
          src={logo}
          className="object-contain object-left"
        />
      </div>

      <div className="flex items-center md:border-2 md:shadow-md rounded-full py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow  bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "start  your search "}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end">
        <p> Become a host </p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars2Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            rangeColors={["#FD5B61"]}
          />
          ;
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex grow font semibold ">
              Number of Guests
            </h2>

            <UsersIcon className="h-5 w-5" />
            <input
              min={1}
              value={noGuests}
              onChange={(e) => setNoGuests(e.target.value)}
              type="number"
              className="w-12 pl-2  text-lg  outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className=" flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
