import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <div className=" flex gap-5 justify-center items-center mb-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/addcoffee">Add Cofee</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    );
};

export default Headers;