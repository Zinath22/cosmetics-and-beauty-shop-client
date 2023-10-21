import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const Product = () => {
    const products = useLoaderData();


    return (
        <div className="m-10">
          {/* <h1>P</h1> */}
          <div className="carousel w-full h-[80vh] mb-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/VpFMcsd/pexels-mart-production-7290089.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/mTLY2hm/laura-chouette-y-Sw72-YAy2-A4-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="
https://i.ibb.co/rG36D3w/laura-chouette-bz-PJm3v8-RWk-unsplash-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     
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