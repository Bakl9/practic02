import React from 'react'
import Menu from './Menu'

class Ccomponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Alex'
        }
    }

    render() {
        const name = this.state.name
        return (
            <div>
                <h1>
                    Class component {name}
                </h1>
            </div>
        );
    } 
}
export default Ccomponent;
