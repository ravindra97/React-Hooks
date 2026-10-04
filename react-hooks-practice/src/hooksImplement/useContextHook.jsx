/*

Step 1 => Creating the Context
Step 2 => Providing the Context
Step 3 => consuming the Context 

*/
import React, { Component,createContext } from 'react';
import { ContextProvider } from '../context/ContextProvider';

export function AppUseContextHook()
{
    return (
        <>
            <section id="center">
                <ContextProvider />
            </section>
        </>
    );
}

export default AppUseContextHook