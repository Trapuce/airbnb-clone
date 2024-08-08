import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderComponent from "../../components/HeaderComponent";
import Banner from "../../components/Banner";
import Smallcard from "../../components/Smallcard";
import MediumCard from "../../components/MediumCard";
import LargeCard from "../../components/LargeCard";
import Footer from "../../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, cartData }) {
  return (
    <div>
      <HeaderComponent />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => (
              <Smallcard key={index} img={item.thumbnail} location={item.title} distance={item.price} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 ">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
            {cartData?.map((item, index) => (
              <MediumCard key={index} img={item.image} name={item.name} />
            ))}
          </div>
        </section>
        <LargeCard
          title="The Greatest OutDoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
      // Combine all products from all carts into a single array
      return data.carts.flatMap(cart => cart.products);
    });
  const cartData = await fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
      // Combine all products from all carts into a single array
      return data.recipes;
    });

  return {
    props: {
      exploreData,
      cartData
    },
  };
}