import Swal from "sweetalert2";



const AddCraftItem = () => {


    const handleAddCoffee = event => {
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

        const newCraft = { item, subcategory, description, price, rating, customization, processing,stock, name, email, photo }
        console.log(newCraft)

        //  send data to the server
        fetch('http://localhost:5000/artCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'art & craft added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                
            })


    }



    return (
        <div>
            <h2 className="text-center text-2xl font-semibold pt-4 pb-6"> Add Craft Item</h2>


            {<form onSubmit={handleAddCoffee}>
                {/* form row  item and subcategory*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Item Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="item" id="" required placeholder="item name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="subcategory" id="" required placeholder="subcategory name" />
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
                            <input className="input input-bordered w-full" type="text" name="description" id="" required placeholder="short description" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Price
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="price" id="" required placeholder="price" />
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
                            <input className="input input-bordered w-full" type="number" name="rating" id="" required placeholder="rating" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Customization</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="customization" id="" required placeholder="Yes / No" />
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
                            <input className="input input-bordered w-full" type="time" name="processing" id="" required placeholder="processing time
" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="stock" id="" required placeholder=" In stock, Made to Order" />
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
                            <input className="input input-bordered w-full" type="text" required name="name" id="" placeholder="User Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> User Email
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="email" name="email" id="" required placeholder="User Email " />
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
                            <input className="input input-bordered w-full" type="text" name="photo" id="" placeholder="Photo URL" />
                        </label>
                    </div>
                </div>
                <input type="submit" value=" Add Craft" className="btn btn-block bg-rose-500 border-0 hover:bg-rose-800 text-white uppercase mb-10" />
            </form>}
        </div>
    );
};

export default AddCraftItem;