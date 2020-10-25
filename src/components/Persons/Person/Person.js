//ES6 syntax -functional component
import React from 'react';
import classes from './Person.css';

const person = (props) => {
    console.log('Person.js rendering')
    return (
        <div id="fromPersonClass" className= {classes.Person}>
            <p onClick={props.click}>
                I am {props.name} and i am {props.age} years old!!</p>
            <p>{props.childern}</p>
            <input type='text'
                onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;