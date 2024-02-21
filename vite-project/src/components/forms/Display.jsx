import React from "react";

function Display({displayData}) {

    console.log("display components rendering");

    return (
        <>
        <h1>name : {displayData.name}</h1>
        <h1>email : {displayData.email}</h1>
        </>
    )
}

export default Display;