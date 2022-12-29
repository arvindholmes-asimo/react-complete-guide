import React, { useState } from 'react';

function Names(props) {

    const [names, setNames] = useState([
        { nam: 'shiva' },
        { nam: 'arvind' }
    ])

    const [val, setVal] = useState("")

    const changeHandler = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }

    const submitHandler = (e) => {
        
        setNames([...names, { nam: val }])
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} value={val} />
                <input type="submit" value="add" />
            </form>
            <div>
                {
                    names.map(x => <p> {x.nam} </p>)
                }
            </div>
        </div >
    );
}

export default Names;