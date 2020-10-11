import React, { useState, Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
//import './App.css';
//import Radium, { StyleRoot } from 'radium'; // -- Pseudo selector and media queries
//import styled from 'styled-components';


class App extends React.Component {
  state = {
    userInput: '',
    persons: [
      { id: "fgdfgd", name: "max", age: 22 },
      { id: "dfgdfgd", name: "taj", age: 29 },
      { id: "sdfsdf", name: "baz", age: 28 }
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = () => {
    console.log('was clicked');
    this.setState({
      persons: [
        { name: 'Shahbaz', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => { // finding the person index -each
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }; //copied to another object 

    person.name = event.target.value;  //update the name from input element 
    const persons = [...this.state.persons];     // got the person 
    persons[personIndex] = person;                //updated person 

    this.setState({ persons: persons }); //setting the state to updated array with new name 

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]//copying the inital state 
    persons.splice(personIndex, 1);       //deleting a person by their index 
    this.setState({ persons: persons })   //setting new state after deleting a person 
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; //current state 
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {   //kinda for each loop 
            return <ErrorBoundary key= {person.id}>
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}  //mostly there is some id provided 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I am a react app</h1>
        <p className={assignedClasses.join(' ')}>this is really working</p>

        <input type="text" onChange={this.inputChangehandler} value={this.state.userInput} />
        <h1>the lenght of the text :  {this.state.userInput}</h1>

        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Person
        </button>
        {persons}
      </div>
    )
  }
}

export default App;