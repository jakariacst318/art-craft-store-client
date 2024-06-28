import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyArtCraft = () => {

    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('datadatadadatadatda', data);
                setItems(data);
            })
    }, [user]);

    return (

        <div>

            <div>
                <h2 className="text-3xl text-yellow-500">My Art & Craft List</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {items.map(item => (
                        <div key={item._id}>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={item.photo} alt="photo" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {item.item}</h2>
                                    <p>Price: {item.price}</p>
                                    <p>Rating: {item.rating}</p>
                                    <p>Customization: {item.customization}</p>
                                    <p>StockStatus: {item.stock}</p>

                                    <div className="card-actions justify-between">
                                        <button className="btn btn-primary">update </button>
                                        <button className="btn btn-primary">delete </button>
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