import { useContext } from "react";
import { userContext } from "./pages/Home";

const User = ({name,age}) => {
    const a=useContext(userContext)
    return (
        <div>
            <h1>useContext value:{a}</h1>
            I am {name}.
            I am {age}years old.
        </div>
    );
};

export default User;
