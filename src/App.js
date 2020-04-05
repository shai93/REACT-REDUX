import React from 'react';
import './App.css';
// import First from './First';
// import Second from './Second';
// import Form from './Form';
// import Portalroot from './Portalroot';
// import { UserProvider, userContext } from './User';
import C from './C';
import {BrowserRouter as Router, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends React.Component {

  state = {
    count:0,
    username:"shailesh",
    isloggedin:false
  }

  // handleIncCount=()=>{
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }

  // handleResetCount=()=>{
  //   this.setState({
  //     count:0
  //   })
  // }

  // handleDecCount=()=>{
  //   this.setState({
  //     count:this.state.count>0?this.state.count-1:0
  //   })
  // }

  handleLogin = ()=>{
    this.setState({
      isloggedin:!this.state.isloggedin
    })
  }


  render(){
    return (
      <Router>
      <div className="App">

        <ul>
          <li><NavLink to="/" exact activeStyle={{color:'green'}}>Home page</NavLink></li>
          <li><NavLink to="/about" exact  activeStyle={{color:'green'}}>About Us</NavLink></li>
          <li><NavLink to="/contact" exact activeStyle={{color:'green'}}>Contact Us</NavLink></li>
          <li><NavLink to="/users/shailesh/mumbai" exact activeStyle={{color:'green'}}>users</NavLink></li>
        </ul>

        <button onClick={this.handleLogin}>{this.state.isloggedin?"Log Out":"Log In"}</button>

        <Route path="/" exact strict component={C}></Route>


        <Route path="/about" exact strict render={()=>{
          return(<div>About Page</div>)
        }}></Route>


        <Route path="/contact" exact strict render={()=>{
          return(!this.state.isloggedin?<Redirect to="/"></Redirect>:<div>Contact Page</div>)
        }}></Route>


        <Route path="/users/:username/:address" exact strict render={({match})=>{
          return(!this.state.isloggedin?<Redirect to="/"></Redirect>:<div>Hello {match.params.username} from {match.params.address} location</div>)
        }}></Route>




        {/* <First count={this.count}></First> */}
        {/* <Second count={this.state.count} handleIncCount={this.handleIncCount} handleResetCount={this.handleResetCount} handleDecCount={this.handleDecCount}/> */}
        {/* <Form></Form> */}
        {/* <Portalroot></Portalroot> */}
        
        {/* <UserProvider value={this.state.username}>
            <UserProvider value={this.state.count}>
              <C></C>
            </UserProvider>
            <C></C>
        </UserProvider> */}
      </div>
      </Router>
    );
  }
}

export default App;
