import { useContext } from "react";
import { ThemeContext } from "./UseContextComponent";

function ThemedComponent(){
    const {theme} =useContext(ThemeContext);

    return <div style={{background : theme, color: "khaki"}}>Themed Component</div>
}

export default ThemedComponent;