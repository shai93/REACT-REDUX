import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Child from './Child';

class App extends React.Component {


  render(){
    return (
      <div className="App">
        <div>
          {this.props.age}
        </div>
        <button onClick={this.props.ageUp}>Up</button>
        <button onClick={this.props.ageDown}>Down</button>
        <Child></Child>
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

const mapDispatchtoProps = (dispatch)=>{
  return {
    ageUp:()=>dispatch({type:"AGE_UP"}),
    ageDown:()=>dispatch({type:"AGE_DOWN"})
  }
}




export default connect(mapStatetoProps,mapDispatchtoProps)(App);
// component H(Acomponent) {
//   state = {
//     name = 'shahilesh'
//   }

//   return <A name={this.state.name}></A>

// }

// A{
//   <div>Hello {this.props.name}</div>
// }


// H(A)

