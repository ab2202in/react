import { useContext } from "react";
import { MyContext } from "./UseContextApp";

function ComponentB (){
    const contextValue = useContext(MyContext);

    return <div>Component B : {contextValue}</div>
}

export default ComponentB;
