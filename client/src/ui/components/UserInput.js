import React from 'react';

function UserInput(props){
  //Render the input value using value passed from container
  return (
    <div className="row">
      <div className="col-sm-6">
        <input
          type="text"
          id="size"
          defaultValue={props.size}
          className="form-control"
        />
      </div>
      <div className="col-sm-2">
        <button className="btn btn-primary" onClick={props.updateSize}>Enter</button>
      </div>
    </div>
  )
}

export default UserInput