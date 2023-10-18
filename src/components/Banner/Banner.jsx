

const Banner = () => {

    const bgImg = {
        backgroundImage: "url(https://i.ibb.co/fGNjtvj/kina-2-Ft-TEfxn-i-A-unsplash.jpg)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat : "no-repeat",
        // backgroundColor: '#FFFFFFB2',
      };

    return (
        <div className="">
            {/* <h1>banner</h1> */}
             <div className="pb-10 ">
             <div style={bgImg}  className="h-[550px] rounded-lg justify-center items-center" >
             {/* <h2 className="text-6xl text-red-400 
              text-center"  data-aos="flip-left" 
              >Plan Your Day With Us <br />  & <br /> make your day more colorful</h2> */}
     {/* <div className="absolute inset-0 bg-opacity-70  z-10">
         
        </div>  */}
    
       
      </div> 
        </div>
        </div>
    );
};

export default Banner;