import React, { Component } from 'react'
import './UserInput.css'
export default class UserInput extends Component {
    render() {
        return (<div >
            <input className="searchbox"placeholder="Search Employees..."
                onChange={(e) => this.props.update(e)} />
        </div>)
    }
}


