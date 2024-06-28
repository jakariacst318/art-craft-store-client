import { useLoaderData } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import CraftItems from "../CraftItems/CraftItems";
import ArtCraft from "../ArtCraft/ArtCraft";

const Home = () => {

    const arts = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="pb-20">
                <h2 className="text-3xl text-center font-semibold "> Craft Items Section </h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-5 justify-center">
                {
                    arts.map(art => <ArtCraft
                        key={art._id}
                        art={art}
                    ></ArtCraft>)
                }
            </div>
            <CraftItems></CraftItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;