import React from 'react';

function DisplayBoard(props){
  //Create the style for the element using props determined in the parent
  //the include color and width
  const style = {
    backgroundColor: props.color,
    width: props.width,
    height: props.width,
    margin: 0,
    padding: 0,
    display: "inline-block"
  }

  return <span style={style}/>
}

export default DisplayBoard;