// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'; 
// import { BsFillStarFill } from 'react-icons/Bs';



// const ProductCard = ({product}) => {

    
//     const {_id, name, brand_name, type, price, description, rating, photo} = product;

//     return (
        
       
        
//            <div className=" flex md:flex-row flex-col w-[300px] rounded-lg bg-base-100 shadow-xl">
//             <img className="w-[40%]" src={photo} alt="" />


//   <div className="justify-between  flex "> 
//  <div className="p-10"> 
//  <h2 className="card-title">Name:{name}</h2>
//    <p>Type:{type}</p>
//    <p>Price: ${price}</p>
//    <p className="flex items-center gap-2"><span className="text-yellow-400"><BsFillStarFill></BsFillStarFill></span> {rating}</p>
//  </div>
//      </div>

//    <div className="btn-group p-10 btn-group-vertical space-y-5 ">
//  {/* <button className="btn ">View</button> */}
//  <Link to={`/update/${_id}`}>
//  <button className="btn bg-purple-400">Update</button>
//  </Link>

//  <Link to={`/productDetail/${_id}`}>
//  <button 

// className="btn bg-purple-400">Details</button>
//  </Link>

// </div>
// </div>

    
          
     
           
//     );
// };

// ProductCard.propTypes={
//   product:PropTypes.object
// }

// export default ProductCard;


import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { BsFillStarFill } from 'react-icons/Bs';

const ProductCard = ({ product }) => {
    const { _id, name, brand_name, type, price, description, rating, photo } = product;

    return (
      <div className="bg-base-100 shadow-xl rounded-lg">
         <div className="flex flex-col md:flex-row ">

<img className="w-full h-[200px] md:w-[40%]" src={photo} alt="" />

<div className="p-4 flex-grow">
    <h2 className="card-title">Name: {name}</h2>
    <p>Type: {type}</p>
    <p>Price: ${price}</p>
    <p className="flex items-center gap-2">
        <span className="text-yellow-400"><BsFillStarFill /></span> {rating}
    </p>
</div>


</div>
<div className="btn-group gap-5 mb-5 mt-5  p-5 btn-group-horizontal">
    <Link to={`/update/${_id}`}>
        <button className="btn bg-pink-600 text-black">Update</button>
    </Link>
    <Link to={`/productDetail/${_id}`}>
        <button className="btn bg-pink-600 text-black">Details</button>
    </Link>
</div>
</div>
    
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;