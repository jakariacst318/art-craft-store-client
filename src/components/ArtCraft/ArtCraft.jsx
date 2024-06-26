import { Link, } from "react-router-dom";
import { FaDollarSign, FaStar } from "react-icons/fa6";
import './artCraft.css'


const ArtCraft = ({ art }) => {

    const { _id, item, price, rating, photo } = art
    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-3/4 h-40 zoom" src={photo} alt="photo" /></figure>
                <div className="card-body text">
                    <h2 className=" text-2xl text-center font-semibold">{item}</h2>
                    <div className="flex justify-between items-center text-xl font-medium">

                        <p className="flex items-center">Price: <FaDollarSign className="text-orange-500"/> {price}</p>

                        <p className="flex items-center">Ratting: <FaStar className="text-orange-500"/>  {rating}</p>
                    </div>

                    <div className="card-actions justify-end mt-5">
                        <Link to={`/details/${_id}`}> <button className="btn bg-rose-500 border-0 hover:bg-rose-800 text-white ">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtCraft;