import React from 'react'
 function Ccomponent(props) {
    return (
        <div>
            <h1>
                Class component, {this,props.numbers.join(',')}
            </h1>
        </div>
    )
}

export default Ccomponent;
