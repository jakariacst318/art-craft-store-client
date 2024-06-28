import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const art = useLoaderData()
    const {_id, item, subcategory, description, price, rating, customization, processing, stock, name, email, photo } = art;

    const handleUpdateCraft = event => {
        event.preventDefault();

        const form = event.target;

        const item = form.item.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const updateCraft = {  item, subcategory, description, price, rating, customization, processing, stock, name, email, photo }
        console.log(updateCraft)

        //  send data to the server
        fetch(`http://localhost:5000/artCraft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'art & craft updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }

            })


    }



    return (
        <div>
            <h2 className="text-center text-2xl font-semibold pt-4 pb-6"> Update Craft Item</h2>


            {<form onSubmit={handleUpdateCraft}>
                {/* form row  item and subcategory*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Item Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="item" id="" required defaultValue={item} placeholder="item name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="subcategory" id="" required defaultValue={subcategory} placeholder="subcategory name" />
                        </label>
                    </div>

                </div>
                {/* form row  short and price */}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Short Description</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="description" id="" required defaultValue={description} placeholder="short description" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Price
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="price" id="" required defaultValue={price} placeholder="price" />
                        </label>
                    </div>

                </div>
                {/* form row  rating and customization*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Rating</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="number" name="rating" id="" required defaultValue={rating} placeholder="rating" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Customization</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="customization" id="" required defaultValue={customization} placeholder="Yes / No" />
                        </label>
                    </div>

                </div>
                {/* form row  processing_time and stockStatus*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Processing Time
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="time" name="processing" id="" required defaultValue={processing} placeholder="processing time
" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="stock" id="" required defaultValue={stock} placeholder=" In stock, Made to Order" />
                        </label>
                    </div>

                </div>
                {/* form row  Name  and  Email*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> User Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" required defaultValue={name} name="name" id="" placeholder="User Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> User Email
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="email" name="email" id="" required defaultValue={email} placeholder="User Email " />
                        </label>
                    </div>

                </div>
                {/* form row photo URL  */}
                <div className="pb-7">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="photo" id="" required defaultValue={photo} placeholder="Photo URL" />
                        </label>
                    </div>
                </div>
                <input type="submit" value=" Update Craft" className="btn btn-block bg-rose-500 border-0 hover:bg-rose-800 text-white uppercase mb-10" />
            </form>}
        </div>
    );
};

export default Update;