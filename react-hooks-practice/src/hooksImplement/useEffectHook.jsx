import React, { useState, useEffect} from 'react';

function AppUseEffectHook() {

    const [count,setCount] = useState(0);

    //useEffect without any dependency
    /*
    useEffect(() => {
        document.title = `click ${count} times !!`;
    });
    */

    //useEffect with dependency(blank array)
    useEffect(() => {
        document.title = `click ${count} times !!`;
    },[]);

    //useEffect with updateing value and dependency value
    /*
    useEffect(() => {
        document.title = `click ${count} times !!`;
    },[count]);
    */
    
    return (
        <>
            <section id="center">
                <button 
                    type="button"
                    className="counter"
                    onClick={() => setCount(count => count + 1 )}
                >
                    click {count} times !! 
                </button>
            </section>
        </>
    );
    
}

export default AppUseEffectHook;