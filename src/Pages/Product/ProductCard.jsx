import { Link } from "react-router-dom";




const ProductCard = ({product}) => {

    
    const {_id, name, brand_name, type, price, description, rating, photo} = product;

    return (
        
        
        
           <div className=" flex md:flex-row flex-col bg-base-100 shadow-xl">
 <figure><img className="md:w-[250px] w-full h-screen md:h-[250px] " src={photo} alt="Movie"/></figure>
 <div className="justify-between  flex ">
 <div className="p-10">
 <h2 className="card-title">{name}</h2>
   <p>{type}</p>
   <p>{price}</p>
   <p>{rating}</p>
 </div>
   <div className="btn-group p-10 btn-group-vertical space-y-5 ">
 {/* <button className="btn ">View</button> */}
 <Link to={`/update/${_id}`}>
 <button className="btn bg-purple-400">Update</button>
 </Link>

 <Link to={`/productDetail/${_id}`}>
 <button 

className="btn bg-purple-400">Details</button>
 </Link>
</div>
</div>
</div>
    
          
     
           
    );
};

export default ProductCard;