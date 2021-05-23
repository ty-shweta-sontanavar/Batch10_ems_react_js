import React, { Component } from 'react'

export default class Home extends Component {

    componentWillUnmount() {
        console.log("Unmounted");
    }
    
    goto =()=>{
            this.props.history.push("/showaccount")
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h1 >Welcome to Technoelevate EmployeeManagementSystem  </h1>
                
            </div>
        )
    }
}