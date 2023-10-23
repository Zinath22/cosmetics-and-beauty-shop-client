


import { useState } from 'react';
import { BsFillStarFill } from 'react-icons/Bs';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';

const MyCart = () => {
   
    const loadedProducts = useLoaderData()

    // console.log(loadedProducts);
    const [products, setProducts] = useState(loadedProducts);
  
   
    const handleDelete = id => {
      console.log(id);

      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
         if (result.isConfirmed) {

      fetch(`http://localhost:5000/cart/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
        
         
            
          if(data.deletedCount > 0 ){
                      Swal.fire(
                          'Deleted!',
                          'Your cart has been deleted.',
                          'success'
                        )

          const remainingProducts = products.filter(product => product._id !== id);
          setProducts(remainingProducts);
                      }
                    })
                  }
                })
    }

      // previous code 


  // console.log(_id);
  // Swal.fire({
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // }).then((result) => {
  //   if (result.isConfirmed) {
     
  //       fetch(`http://localhost:5000/cart/${_id}`,{
  //       method: 'DELETE'
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       if(data.deletedCount > 0 ){
  //           Swal.fire(
  //               'Deleted!',
  //               'Your cart has been deleted.',
  //               'success'
  //             )
  //           //   const remaining = products.filter(prod => prod._id !== _id);
  //           //   setProducts(remaining);
  //       }
  //     })

  //   }
  // })
    


    return (
        <div className='grid  p-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
            {
              products.length === 0 ? (
               <div className=' justify-center items-center'> 
               <p className='text-2xl text-center  '>No data found</p></div>
              ) :
              products.map(product => 
                     <div key={product._id}> 
                     .   <div className="card lg:card-side bg-base-100 shadow-xl" >
                            <figure><img className='h-[200px] w-[200px] ' src={product.photo} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title" >{product.name}</h2>
                                <p>Price: {product.price}$</p>
                                <p className='flex items-center gap-2 '><span className='text-yellow-400'><BsFillStarFill></BsFillStarFill></span> {product.rating}</p>
                                <div className="card-actions justify-end">
                                    <button 
                                    onClick={() => handleDelete(product._id)}
                                    className="btn bg-purple-500 btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                     )
            }
         </div>
    );
};

export default MyCart;







// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";


// const MyCart = ({product, products, setproducts}) =>  {

//   const {_id, brand_name, description, name, photo, price, rating, type, } = product;

//    const handleDelete = _id => {
//    console.log(_id);
//    Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
      
//     fetch(`http://localhost:5000/cart/${_id}`, {
//       method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       if(data.deletedCount > 0){
//         Swal.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//           )
//           // const remaining = products.filter(cof => cof._id !== _id);
//           const remaining = products.filter(cof => cof._id !== _id)
//           setproducts(remaining);
//         }
//       })

// }
// })
// }

//     return (
//         <div>
//             <div className="card card-side bg-base-100 shadow-xl">
//   <figure><img src={photo} alt="Movie"/></figure>
//   <div className="justify-between w-full pr-3 flex">
//   <div>
//   <h2 className="card-title">Name: {name}</h2>
//     <p>{price}</p>
//     <p>{rating}</p>
//     {/* <p>{taste}</p> */}
//   </div>
//     <div className="btn space-y-4">
  
//   <button 
//   onClick={ ()=> handleDelete(_id)}
//   className="btn bg-orange-400">Delete</button>
// </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default MyCart;