import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const Product = () => {
    const products = useLoaderData();


    return (
        <div className="m-10">
          {/* <h1>P</h1> */}
     
    <div className="grid md:grid-cols-2 gap-5">
    {
        products.map(product => <ProductCard 
            key={product._id}
            product={product}
            ></ProductCard>)
     }
    </div>
        </div>
    );
};

export default Product;