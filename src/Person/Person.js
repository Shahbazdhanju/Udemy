//ES6 syntax
import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {                               // we can throw an error if the value doen'st match for us
        throw new Error('Something went wrong');
    }
   
    return (
    
        <div id="test" className= {classes.Person}>
            <p onClick={props.click}>
                I am {props.name} and i am {props.age} years old!!</p>
            <p>{props.childern}</p>
            <input type='text'
                onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;