import React,{ useState } from "react";
import form from "./form";
import display from "./display";

function parent(){
    console.log("Parent Component rendering");

    const [dataToDisplay,setDataToDisplay] =useState('');

    const handleSubmit= (data)=>{
        setDataToDisplay(data);

    }

    return(
        <>
        <form onSubmit={handleSubmit}/>
        <display displayData={dataToDisplay}/>
        </>
    )
}

export default parent;