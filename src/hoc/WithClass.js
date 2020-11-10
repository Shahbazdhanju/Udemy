import React from "react";

//--version one for HOC Withclass 
// const withClass = (WrappedComop ) => (
//   <div className={props.classes}>{props.children}</div>
// );

//--version two, here we are using a javascript function and returning
//a functional component in it. 

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    )
   
}

export default withClass;
