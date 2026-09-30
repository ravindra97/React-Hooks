import React, { useState } from 'react';

function AppUseStateHook() {
    const [count,setCount] = useState(0); //useState with integer or number
    const [name,SetName] = useState(''); //useState with string 
    const [form,SetForm] = useState({f_name : "Ravi",f_age : 26,f_gender : "male"}); //useState with Object

    function handleButtonChange(count){
        setCount((count) =>  count + 1 )
    }

    function handleLablechange(event){
        SetName((name) => event.target.value)
    }

    return (
        <>
            <section id="center">
                <button
                    type="button"
                    className="counter"
                    //onClick={() => setCount(count => count + 1)} //Way 1 directly with Arrow function
                    onClick={handleButtonChange} //Way 2 explicitly defining the function above(handlechange()) and use here
                >
                    Count is {count}
                </button>

                <br></br>

                <input
                    type="text"
                    //onChange={(event) => SetName(value => event.target.value)} //Way 1 directly with Arrow function(event)
                    onChange={handleLablechange} //Way 2 explicitly defining the function above(handleLablechange()) and use here
                >
                </input>

                <br></br>

                <label id="lblName">
                    Name is {name}
                </label>

                <h3>Object Hooks Value Below</h3>
                <input
                value={form.f_name}
                onChange={(event) => SetForm((prev) =>({...prev, f_name : event.target.value }))}
                placeholder='Name'
                />
                <br/>
                <input
                value={form.f_age}
                onChange={(event) => SetForm((prev)=>({...prev,f_age : event.target.value}))}
                placeholder='Age'
                />
                <br/>
                <input
                value={form.f_gender}
                onChange={(event) => SetForm((prev)=>({...prev,f_gender : event.target.value}))}
                />

                <label>
                    Name is {form.f_name} and age is {form.f_age} and Gender is {form.f_gender}
                </label>
                <pre>{JSON.stringify(form, null, 2)}</pre>

            </section>
        </>
    )
}

export default AppUseStateHook