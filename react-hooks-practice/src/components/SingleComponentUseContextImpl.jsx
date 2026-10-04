import React, { Component, useContext } from 'react';
import {ccontext} from "../context/ContextProvider";

export function SinglePost() 
{
    const cp = useContext(ccontext);
    console.log(cp);

    return <h1>Single Post</h1>
}

export default SinglePost