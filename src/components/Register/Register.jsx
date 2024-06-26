import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const [registerError , setRegisterError] = useState ('')
    const [success, setSuccess] = useState ('')

    const { createUser } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        if(password.length < 6){
            setRegisterError('must be at least 6 character');
            return;            
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password upper case characters');
            return;
        }
        else if(!/[a-z]/.test(password)){
            setRegisterError('Your password Lower case characters');
            return;
        }
        
        // reset 
        setRegisterError('')
        setSuccess('')

        // create user
         createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'Register successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                setSuccess('Create User Successfully')
                e.target.reset()
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
                
            }) 
    }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Register your account</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body pt-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                        
                        <p className="text-center pb-5">Already  have an account <Link to='/login'><span className="text-blue-600 font-medium">Login</span></Link> </p>
                    </div>
                </div>
            </div>
    );
};

export default Register;