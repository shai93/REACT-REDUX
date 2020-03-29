import React from 'react';
import './App.css';
// import First from './First';
import Second from './Second';
import Form from './Form';
import Portalroot from './Portalroot';
import { UserProvider, userContext } from './User';
import C from './C';

class App extends React.Component {

  state = {
    count:0,
    username:"shailesh"
  }

  handleIncCount=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  handleResetCount=()=>{
    this.setState({
      count:0
    })
  }

  handleDecCount=()=>{
    this.setState({
      count:this.state.count>0?this.state.count-1:0
    })
  }


  render(){
    return (
      <div className="App">
        {/* <First count={this.count}></First> */}
        {/* <Second count={this.state.count} handleIncCount={this.handleIncCount} handleResetCount={this.handleResetCount} handleDecCount={this.handleDecCount}/> */}
        {/* <Form></Form> */}
        {/* <Portalroot></Portalroot> */}
        
        <UserProvider value={this.state.username}>
            <UserProvider value={this.state.count}>
              <C></C>
            </UserProvider>
            <C></C>
        </UserProvider>
      </div>
    );
  }
}

export default App;
