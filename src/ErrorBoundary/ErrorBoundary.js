//not really recommended to use in real application 
//- only use when you know our code might fail which cant be controlled 
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hassError: false,
        errorMessage: ''
    }
    //this is method which receive error and info
    componentDidCatch = (error, info) => {
        this.setState({hasError:true, errorMessage: error});
    }

    render() {
       if(this.state.hassError) {
           return <h1>{this.state.errorMessage}</h1>  // this gets fires if error is catched
       }
       else{
           return this.props.children; // defualt case- whatever wrapped inside the ErrorBoundary 
       }
    }
}

export default ErrorBoundary;