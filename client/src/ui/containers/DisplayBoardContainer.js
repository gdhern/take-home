import React, {Component} from 'react';
import DisplayBoard from '../components/DisplayBoard';

export default class DisplayBoardContainer extends Component{
  //Loop the array of arrays and print each one
  printArray = (boardArray) => {
    return boardArray.map(ar => {
      return ar;
    })
  }

  render(){
    const size = this.props.size;

    let boardArray = []

    for (let i = 0; i < size; i++){
      let arr = [];
      for (let j = 0; j < size; j++){
        //If row is even, even columns should be black 
        //If row is odd , odd columns should be black
        //Opposite for white spots
        if ((i%2 === 0 && j%2 === 0) || (i%2 === 1 && j%2 === 1)){
          arr.push(
            <DisplayBoard key={j} color="black" width={100/size+"px"}/>
          )
        } else if ((i%2 === 0 && j%2 === 1) || (i%2 === 1 && j%2 === 0)){
          arr.push(
            <DisplayBoard key={j} color="white" width={100/size+"px"}/>
          )
        } 
        //Add the end of a row add a <br> element
        if (j=== size-1){
          arr.push(<br/>)
        }
      }
      boardArray.push(arr)
    }

    return (
      <div className="row">
        <div className="col-sm-12">
          {this.printArray(boardArray)}
        </div>
      </div>
    )
  }
}