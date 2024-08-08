import Image from "next/image"

export default function Footer(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14  bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                 <h5>ABOUT</h5>
                 <p>How Airbnb works</p>
                 <p>NewSroom</p>
                 <p>Airbnb Plus</p>
                 <p>Investors</p>
                 <p>Airbnb luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                 <h5>COMMUNITY </h5>
                 <p>How Airbnb works</p>
                 <p>NewSroom</p>
                 <p>Airbnb Plus</p>
                 <p>Investors</p>
                 <p>Airbnb luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                 <h5>HOST</h5>
                 <p>How Airbnb works</p>
                 <p>NewSroom</p>
                 <p>Airbnb Plus</p>
                 <p>Investors</p>
                 <p>Airbnb luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                 <h5>CONTACT</h5>
                 <p>How Airbnb works</p>
                 <p>NewSroom</p>
                 <p>Airbnb Plus</p>
                 <p>Investors</p>
                 <p>Airbnb luxe</p>
            </div>
        </div>
    );
}