import React from 'react';
import {connect} from 'react-redux';

class Child extends React.Component {

  render(){
    return (
      <div>
        {this.props.age}
      </div>
    );
  }
}

// store state to component
const mapStatetoProps = (state)=>{
  return {
    age:state.age
  }
}


export default connect(mapStatetoProps)(Child);
