import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
             <div className="justify-center text-center">
            <h2 className="justify-center text-center items-center">Error!!!</h2>
            <Link to="/">Go Back to home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;