import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyArtCraft = () => {

    const { user, } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/artCraft/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    })
            }
        });

    }



    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
    }, [user]);





    return (

        <div>

            <div>
                <h2 className="text-center text-2xl font-semibold pt-4 pb-10">My Art & Craft List</h2>
                <div className="grid md:grid-cols-2 gap-6 justify-center">
                    {items.map(item => (
                        <div key={item._id}>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={item.photo} alt="photo" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {item.item}</h2>
                                    <p className="text-lg font-medium">Price: {item.price}</p>
                                    <p>Rating: {item.rating}</p>
                                    <p>ID: {item._id}</p>
                                    <p>Customization: {item.customization}</p>
                                    <p>StockStatus: {item.stock}</p>



                                    <div className="card-actions justify-between pt-5">
                                        {/* <Link to = {`update/${item._id}`}>
                                            <button className="btn bg-green-600 border-0 hover:bg-green-700 text-white"> <FaPen /> Update </button>
                                        </Link> */}
                                        <Link to = {`/update/${item._id}`}>
                                            <button className="btn bg-green-600 border-0 hover:bg-green-700 text-white"> <FaPen /> Update </button>
                                        </Link>
                                        

                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn bg-rose-500 border-0 hover:bg-rose-800 text-white"><span><AiFillDelete /></span> Delete </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyArtCraft;