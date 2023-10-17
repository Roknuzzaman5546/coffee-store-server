import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase";

export const Authcontext = createContext(null);
const Authprovider = ({children}) => {
    const [users, setUSers] = useState();
    const [loaded, setLoded] = useState(true)

    const creatUser = (email, password) =>{
        setLoded(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singin = (email, password) =>{
        setLoded(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authinfo = {
        users,
        creatUser,
        loaded,
        singin
    }
    
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;