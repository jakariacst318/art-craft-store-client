import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData();

    const { item, subcategory, description, price, rating, customization, processing,stock, name, email, photo} = details




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div>
                        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="space-y-3">
                        <h1><span className="text-3xl font-bold ">{item}</span></h1>

                        <p className="text-black text-xl font-semibold"> Subcategory: <span className=" text-slate-600 font-medium">{subcategory}</span> </p>

                        <p className="text-black text-xl font-semibold"> stock: <span className=" text-slate-600 font-medium">{stock}</span> </p>

                        <p className="text-black text-xl font-semibold"> price: <span className=" text-slate-600 font-medium">{price}</span> </p>

                        <p className="text-black text-xl font-semibold"> rating: <span className=" text-slate-600 font-medium">{rating}</span> </p>

                        <p className="text-black text-xl font-semibold"> customization: <span className=" text-slate-600 font-medium">{customization}</span> </p>

                        <p className="text-black text-xl font-semibold"> processing: <span className=" text-slate-600 font-medium">{processing}</span> </p>

                        <p className="text-black text-xl font-semibold"> name: <span className=" text-slate-600 font-medium">{name}</span> </p>
                        
                        <p className="text-black text-xl font-semibold"> email: <span className=" text-slate-600 font-medium">{email}</span> </p>


                        <p className="text-black text-xl font-semibold"> Description: <span className=" text-slate-600 font-medium">{description}</span> </p>
                        
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;