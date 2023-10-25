

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { BsFillStarFill } from 'react-icons/Bs';

const ProductCard = ({ product }) => {
    const { _id, name, brand_name,  type, price,  rating, photo } = product;

    return (
      <div className="bg-base-100 shadow-xl rounded-lg">
         <div className="flex flex-col md:flex-row ">

<img className="w-full h-[200px] md:w-[40%]" src={photo} alt="" />

<div className="p-4 flex-grow">
    <h2 className="card-title">{name}</h2>
    <h2 className="text-2xl font-semibold">{brand_name}</h2>
    <p>Type: {type}</p>
    <p>Price: ${price}</p>
    <p className="flex items-center gap-2">
        <span className="text-yellow-400"><BsFillStarFill /></span> {rating}
    </p>
</div>


</div>
<div className="btn-group gap-5 mb-5 mt-5  p-5 btn-group-horizontal">
    <Link to={`/update/${_id}`}>
        <button className="btn bg-pink-600 text-white">Update</button>
    </Link>
    <Link to={`/productDetail/${_id}`}>
        <button className="btn bg-pink-600 text-white">Details</button>
    </Link>
</div>
</div>
    
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;