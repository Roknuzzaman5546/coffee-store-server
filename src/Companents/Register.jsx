import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authcontext";
import Swal from "sweetalert2";

const Register = () => {
const { creatUser } = useContext(Authcontext)
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        creatUser(email, password)
        .then(result =>{
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;
            const user = { email, createdAt: createdAt };
            fetch('https://coffe-store-server-5cp46egnt-rokonuzzamans-projects.vercel.app/user', {
                method: "POST",
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Succesfully!',
                        'Your file has beed added.',
                        'success'
                        )
                }
            })
            form.reset()
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;