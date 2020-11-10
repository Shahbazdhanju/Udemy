import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //     console.log('Perons.js[] getDrivedStateFromProps')
  //     return state;
  // }


//-- we are checking all properties, then we cannot use -ShouldComponentUpdate
//-- instead of should Compoenet Update we can use Pure component 
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[Perons.js] shouldComponentUpdate");
//     if (
//       nextProps.persons !== this.props.persons ||
//       nextProps.person !== this.props.changed ||
//       nextProps.clicked !== this.props.clicked
//     ) {
//       return true;
//     } else {
//       return false;
//     }

//     //we suppose to implement code here to check if we
//     //cont. want to update the component
//   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot!!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("perosns.js componentDidUpdate");
    //   console.log('Persons.js componentDidUpdate')f
  }

  componentWillUnmount() {
    console.log("[Person.js] componentWillUnmount");
  }

  render() {
    console.log("Persons.js rendering...");
    return this.props.persons.map((person, index) => {
      //kinda for each loop
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id} //mostly there is some id provided
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
