// import Navbar from "../../components/Navbar/Navbar";

import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Collections from "./Collections/Collections";
import Contact from "./Contact/Contact";


const Home = () => {
    return (
        <div className="px-10 mx-auto">
       <Banner></Banner>
       <Products></Products>
       <Collections></Collections>
       <Contact></Contact>
        </div>
    );
};

export default Home;