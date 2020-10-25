//functional component - another type where we dont use return and curly braces
import React from 'react';
import Person from './Person/Person'

const persons = (props) =>{
    console.log('Persons.js rendering...');

    return props.persons.map((person, index) => {   //kinda for each loop 
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}  //mostly there is some id provided 
            changed={(event) => props.changed(event, person.id)} />
    
    });

}
export default persons;