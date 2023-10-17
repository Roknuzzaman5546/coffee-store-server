import { Outlet } from "react-router-dom";
import Headers from "../Headers";

const Roots = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;