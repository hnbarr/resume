import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-secondary" to='/' id='dashBtn'> test </Link> 
            </div>
        )
    }
}
