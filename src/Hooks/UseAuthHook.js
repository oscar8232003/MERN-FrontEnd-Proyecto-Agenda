import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseAuthHook = () => useContext(AuthContext);

export default UseAuthHook;
