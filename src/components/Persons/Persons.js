//functional component - another type where we dont use return and curly braces
import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends React.Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('Perons.js[] getDrivedStateFromProps')
    //     return state;
    // } 

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Perons.js] shouldComponentUpdate')
        return true;
        //we suppose to imple,emt code here to check if we 
        //cont. want to update =the component
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot!!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('perosns.js componentDidUpdate')
     //   console.log('Persons.js componentDidUpdate')
    }

    render() {
        console.log('Persons.js rendering...');
        return this.props.persons.map((person, index) => {   //kinda for each loop 
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}  //mostly there is some id provided 
                    changed={(event) => this.props.changed(event, person.id)}
                />
            )
        });
    }
}

export default Persons;