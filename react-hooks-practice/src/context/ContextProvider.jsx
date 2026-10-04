import React, {createContext} from "react";
import { MainComponent } from "../components/MainComponent";

//Creating the context => Step 1
export const ccontext = createContext(); 

export function ContextProvider()
{
    return(
        // Providing the context = step 2 
        <div>
            
            <ccontext.Provider value={true}>
                <MainComponent />
            </ccontext.Provider>
        </div>
    )
}

export default ContextProvider