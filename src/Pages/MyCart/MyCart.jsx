import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    // const {_id, brand_name, description, name, photo, price, rating, type, } = product;
    const loadedProductes = useLoaderData()
    

    console.log(loadedProductes);
    // const [products , setProductes] = useState([])

    return (
        <div className='grid p-10 gap-4 grid-cols-3'>
            {
                loadedProductes.map(product =>
                    <div key={product._id}>
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src={product.photo} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>{product.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyCart;