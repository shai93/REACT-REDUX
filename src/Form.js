import React from 'react';

class Form extends React.Component{

    constructor(props){
        super();

        this.state = {
            username:""
        }
    }

    handleChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Registration Form</h1>
                <h2> Hello, {this.state.username}</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" name="username" onChange={this.handleChange}/>
                </form>

            </React.Fragment>
        )
    }

}


export default Form;