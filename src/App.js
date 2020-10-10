import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';
//import Radium, { StyleRoot } from 'radium'; // -- Pseudo selector and media queries
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'}; 
      font: inhert;             
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      color: white;
      &:hover {
        background-color: ${props => props.alt ? 'lightpink' : 'lightgreen'};
        color: black;
      }
`;
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
    // in-line render
    // const style = {
    //   backgroundColor: 'green',  //all these value need to be in couation 
    //   font: 'inhert',             //we are using javascript
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {   //kinda for each loop 
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}  //mostly there is some id provided 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      <div className='App'>
        <h1>Hi, I am a react app</h1>
        <p className={classes.join(' ')}>this is really working</p>

        <input type="text" onChange={this.inputChangehandler} value={this.state.userInput} />
        <h1>the lenght of the text :  {this.state.userInput}</h1>

        <button className="button"
          //style={style}
          onClick={this.togglePersonsHandler}>Toggle Person
        </button>
        {persons}
      </div>
    )
  }
}

export default App;

// state = { //object type
//   persons: [
//     {name: "max", age : 22},
//     {name: "taj", age : 29},
//     {name: "baz", age : 28}
//   ]
// }
// switchNameHandler = () => {
//   //console.log('was clicked');
//   this.setState({
//     persons: [
//       {name: 'Shahbaz', age:28}]
//     })
// }


// <Person
// name={persotunsState.persons[0].name} 
// age={personsState.persons[0].age} />
// <Person
// name={personsState.persons[1].name} 
// age={personsState.persons[1].age}
// click={this.switchNameHandler}> My Hobbies: racing </Person>
// <Personk
// name={personsState.persons[2].name} 
// age={personsState.persons[2].age} />
// </div>
// );
// }

{/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max')}>
            changed={this.nameChangedHandler} My Hobbies: racing </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}