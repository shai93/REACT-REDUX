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
        <ul>
            {
              this.props.history.map((ele)=>{
                return <li key={ele.id} onClick={()=>this.props.handlRemove(ele.id)}>{ele.age}</li>
              })
            }
        </ul>
      </div>
    );
  }
}

// store state to component
const mapStatetoProps = (state)=>{
  return {
    age:state.age,
    history:state.history
  }
}

const mapDispatchtoProps = (dispatch)=>{
  return {
    ageUp:()=>dispatch({type:"AGE_UP", value:1}),
    ageDown:()=>dispatch({type:"AGE_DOWN", value:1}),
    handlRemove:(id)=>dispatch({type:"REMOVE", key:id})
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

