import React, {Component} from 'react';
import UserInputContainer from '../containers/UserInputContainer';

export default class Homepage extends Component{
  //Added the state here to share with the input and display components
  state = {
    size: 8,//Initailize with default value of 8
  }

  updateSize = () => {
    const value = document.getElementById("size").value;

    if (!value){
      return;
    }
    //Update to the size passed in
    //Not used onChange with input to prevent issues 
    //when erasing the input value.
    this.setState({size: value})
  }

  render(){
    return(
      <div>
        <h1>Homepage</h1>
        <UserInputContainer
          size={this.state.size}
          updateSize={this.updateSize}
        />
      </div>
    )
  }
}