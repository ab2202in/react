import React,{ useState } from "react";
import Form from "./Form";
import Display from "./Display";

function Parent(){
    console.log("Parent Component rendering");

    const [dataToDisplay,setDataToDisplay] =useState('');

    const handleSubmit= (data)=>{
        setDataToDisplay(data);

    }

    return(
        <>
        <Form onSubmit={handleSubmit}/>
        <Display displayData={dataToDisplay}/>
        </>
    )
}

export default Parent;