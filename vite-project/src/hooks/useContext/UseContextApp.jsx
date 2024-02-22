import React,{createContext,useContext} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const MyContext = createContext ('default');

function UseContextApp(){
    return(
       <MyContext.Provider value ="hello from context">
       <ComponentA/>
       <ComponentB/>
       </MyContext.Provider>
    )
}

export default UseContextApp;