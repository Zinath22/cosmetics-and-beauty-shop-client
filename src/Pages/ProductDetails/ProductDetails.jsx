

const ProductDetails = () => {

   

    return (
        <div className="flex justify-center  p-10">
         <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;