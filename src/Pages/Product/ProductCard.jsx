import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { BsFillStarFill } from 'react-icons/Bs';



const ProductCard = ({product}) => {

    
    const {_id, name, brand_name, type, price, description, rating, photo} = product;

    return (
        
       
        
           <div className=" flex md:flex-row flex-col w-[300px] rounded-lg bg-base-100 shadow-xl">
            <img className="w-[40%]" src={photo} alt="" />
 {/* <figure><img className="md:w-[250px] w-full h-screen md:h-[250px] " src={photo} alt="Movie"/></figure> */}

  <div className="justify-between  flex "> 
 <div className="p-10"> 
 <h2 className="card-title">Name:{name}</h2>
   <p>Type:{type}</p>
   <p>Price: ${price}</p>
   <p className="flex items-center gap-2"><span className="text-yellow-400"><BsFillStarFill></BsFillStarFill></span> {rating}</p>
 </div>
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

    
          
     
           
    );
};

ProductCard.propTypes={
  product:PropTypes.object
}

export default ProductCard;