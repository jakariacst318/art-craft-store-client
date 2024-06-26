
import photo from '../../assets/404.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Link ><button className="btn btn-warning mt-10 ms-10"> Go Back</button></Link>
            <img className='w-1/2 mx-auto' src={photo} alt="404" />
        </div>
    );
};

export default ErrorPage;