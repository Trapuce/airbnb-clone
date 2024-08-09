import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import HeaderComponent from "../../components/HeaderComponent";
import InfoCard from "../../components/InfoCard";
import { format } from 'date-fns';
import MapCard from "../../components/MapCard";

export default function Search({searchResults}){
    const router = useRouter();
    const {location , startDate , endDate , noGuests} = router.query
    const formatedStartDate = startDate ? format(new Date(startDate), "dd MMM yy") : '';
    const formatedEndDate = endDate ? format(new Date(endDate), "dd MMM yy") : '';
    const range = `${formatedStartDate} - ${formatedEndDate}`;

    return(
        <div>
                <HeaderComponent placeholder={`${location} | ${range} | ${noGuests} guests`} />

                <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                         <p className="text-xs"> 300+ stays - {range} - for {noGuests}  Guests</p>
                         <p className="text-3xl mt-2 mb-6"> Stays in {location}</p>
                         <div className="hidden  lg:inline-flex  space-x-3 mb-5 text-gray-800 whitespace-nowrap">
                             <p className="button">Cancelllation Flexibility</p>
                             <p className="button" >Type of Place</p>
                             <p className="button" >Price</p>
                             <p className="button" >Rooms and Beds</p>
                             <p className="button">More filters</p>
                         </div>

                         {searchResults?.map((item, index) => (
                             <InfoCard 
                                key={index}
                                img={item.image}
                                location={item.cuisine}
                                name={item.name}
                                description={item.ingredients}
                                star={item.rating}
                                price={item.reviewCount}
                                total={item.caloriesPerServing}
                                
                             />
                            ))}
                    </section>
                    <section className="hidden xl:inline-flex xl:min-w-[600px]">
                         <MapCard />
                    </section>
                </main>




                <Footer />
        </div>
    );
}
export async function getServerSideProps() {
  
    const searchResults = await fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        // Combine all products from all carts into a single array
        return data.recipes;
      });
  
    return {
      props: {
        searchResults,
        
      },
    };
  }