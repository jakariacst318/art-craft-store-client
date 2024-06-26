import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { sigIn, googleLogin, githubLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        setLoginError('')

        sigIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()

                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Login your account</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body pt-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full">Login</button>
                            </div>
                        </form>
                        <div className="flex gap-x-4  justify-center">
                            <button onClick={() => googleLogin()} className="btn bg-rose-500 border-0 hover:bg-rose-800 text-white uppercase">google</button>

                            <button onClick={() => githubLogin()} className="btn bg-rose-500 border-0 hover:bg-rose-800 text-white uppercase">github</button>
                        </div>
                        {
                            loginError && <h5 className="text-red-500">{loginError}</h5>

                        }
                        <p className="text-center py-5">Don not have an account <Link to='/register'><span className="text-blue-600 font-medium">Register</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Login;