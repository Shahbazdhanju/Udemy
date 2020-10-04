//ES6 syntax
import React from 'react';
//import './Person.css';
import Radium from 'radium';
import styled from 'styled-components'

const StyledDiv = styled.div `
width:60%;
margin:16px auto;
border: 1px solid black;
padding: 16px;
text-align:center;
'@media(min-width: 500px)' : {  
        width: '450px'
    }
 };

`;

const person = (props) => {
    // const style = {    
    //    '@media(min-width: 500px)' : {   //special selector 
    //        width: '450px'
    //    }
    // };
    return (
      //  styles.div  // no .css file required for styles-component lib
       
        <StyledDiv>
            <p onClick={props.click}>
                I am {props.name} and i am {props.age} years old!!</p>
            <p>{props.childern}</p>
            <input type='text'
                onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

export default person;