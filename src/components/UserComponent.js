import React, { Component } from 'react'

export default class UserComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstname : ""
        }
    }
    
    render() {
        return (
            <div>
                <form>
                    <div>
                        FirstName : <input type = "text" name = "firstname"/>
                    </div>
                </form>
            </div>
        )
    }
}

