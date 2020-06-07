import React, { Component } from 'react'
import './UserInput.css'
export default class UserInput extends Component {
    render() {
        return (<div >
            <input className="searchbox" placeholder="Type here to search"
                onChange={(e) => this.props.update(e)} />
        </div>)
    }
}


