import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>This site can’t be reached</h2>
            <Link to="/">Go back to home</Link>
            
        </div>
    );
};

export default ErrorPage;