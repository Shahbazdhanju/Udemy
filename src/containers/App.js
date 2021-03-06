import React, { useState, Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/auxiliary';
import AuthContext from '../context/auth-context'

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constuctor')

  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Apps.js] getDrivedStateFromProps', props);
    return state;
  }
 
  state = {
    persons: [
      { id: "fgdfgd", name: "max", age: 22 },
      { id: "dfgdfgd", name: "taj", age: 29 },
      { id: "sdfsdf", name: "baz", age: 28 }
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false,
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  // componentWillMount(){
  //   console.log('[Apps.js] componentWillMount')
  // }

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

  loginHandler = () =>{
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          isAuthenticated={this.state.authenticated}/>
    }

    return (
      <Aux>
        <button onClick={() =>
          this.setState({ showCockpit: false })
        }>Remove Cockpit
        </button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler }}>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          /> 
        ) : null}
        {persons}
        </AuthContext.Provider>
      </Aux>
    )
  }
}

export default withClass(App, classes.App);