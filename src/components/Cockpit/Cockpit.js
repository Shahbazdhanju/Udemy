import React, { useEffect , useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  //useRef() is a hook - null is an intial value
  const toggleBtnRef = useRef(null);

  useEffect(() => {  
    console.log("Cockpit : useEffect");
    toggleBtnRef.current.click();  
    return () => {
      console.log("[cockpit.js] cleanup work in useEffect");
    };
    // }, [props.persons])  //IMPROVED-we added this 2nd argument to tell when to run this.-so only when the props.persons changes
  }, []); //we can react to render it only once in the beging- achived by empty array []-no dependiences - no changes IMP.

  useEffect(() => {
    console.log("2nd useEffect cockpit.js  ");
    return () => {
      console.log("cockpit cleanup work 2nd useEffect");
    };
  });
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>this is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

      <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default cockpit;
