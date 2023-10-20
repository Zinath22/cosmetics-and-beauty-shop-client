


import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('collections.json') // Correct the filename
      .then((res) => res.json())
      .then((data) => setCollections(data)); // Update the 'collections' state
  }, []);

  return (
   <div>
     <h1 className="mb-5 text-4xl text-purple-500 font-semibold text-center" data-aos="flip-left">  Our  collection</h1>
    <Marquee pauseOnHover={true} speed={200}>
    
     
     <div className="py-10 mx-auto  ">
      
          <div>
              
              {
                        collections?.map(collection =>(
                          <div key={collection.id}>
                            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <img className="w-[320px] h-[320px] mx-auto  " src={collection.img} alt={collection.name} />
      </div>
      <div className="p-6 text-center">
        <h4 className="mb-2 block font-sans text-purple-500 text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {collection.name}
        </h4>
       
      </div>
     
    </div>
                          </div>
                        ) )
                            
                        
                    } 
                 </div> 
            </div>
            
            </Marquee>
            </div>
      );
    };

export default Collections;
