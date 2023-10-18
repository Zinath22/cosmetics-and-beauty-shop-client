


import Swal from "sweetalert2";

const AddProducts = () => {

    const handleAddProducts = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProducts = {name, type, price, description, rating, photo}
        console.log(newProducts)

        // sent data 
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
              if(data.insertedId){
                Swal.fire({
                    title: 'Added Successfully',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'OKk'
                })
              }
        })
    }
    return (
        <div className="">
          
             <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl justify-center text-center font-extrabold">Add a New Products</h2>
            <form onSubmit={handleAddProducts} >
                {/* form name and quantity row  */}
                <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Products Name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="name" placeholder="Enter products name" className="input input-bordered w-full" />
  </label>
</div>
                <div className="form-control w-1/2">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
  </label>
</div>
                </div>

                {/* form supplier row  */}
                <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="price" placeholder="Enter coffee prie" className="input input-bordered w-full" />
  </label>
</div>
                <div className="form-control w-1/2">
  <label className="label">
    <span className="label-text">Description</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
  </label>
</div>
                </div>

                {/* form category and details  row */}
                <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered w-full" />
  </label>
</div>
                <div className="form-control w-1/2">
  <label className="label">
    <span className="label-text">Photo</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full mb-5" />
  </label>
</div>
                </div>
                 {/* photo 
                <div className="mb-2">
                <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
  </label>
</div>
 
</div>  */}
{/* <button className="btn btn-block">block</button>  */}
        <input type="submit" value="Add products"  className="btn btn-block text-red-500"/>
            </form>
        </div>
        </div>
       
    );
};

export default AddProducts;