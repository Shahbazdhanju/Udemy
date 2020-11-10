import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

     (() => {
        console.log('Cockpit : useEffect')
        //we can send an http req. 
         setTimeout(() => {
            alert('save data to cloud');        //this alert is called evertime a page refresh or changes
        }, 1000);
        return () =>{
            console.log('[cockpit.js] cleanup work in useEffect');
        }
        // }, [props.persons])  //IMPROVED-we added this 2nd argument to tell when to run this.-so only when the props.persons changes  
    }, []) //we can react to render it only once in the beging- achived by empty array []-no dependiences - no changes IMP.
    
    useEffect(() => {
        console.log('2nd useEffect cockpit.js  ')
        return () => {
            console.log('cockpit cleanup work 2nd useEffect');
        }
    })
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>

            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>this is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Person
        </button>

        </div>)
}

export default cockpit;