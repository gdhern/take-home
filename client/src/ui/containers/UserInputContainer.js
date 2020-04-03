import React, {Component} from 'react';
import UserInput from '../components/UserInput';

export default class UserInputContainer extends Component{
  render(){
    const size = this.props.size

    return (
      <UserInput
        size={size}
        updateSize={this.props.updateSize}
      />
    )
  }
}