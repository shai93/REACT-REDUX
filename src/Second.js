import React from 'react';


class Second extends React.Component{

    constructor(props){
        super();
        this.count = props.count;
        this.handleIncCount = props.handleIncCount;
        this.handleResetCount = props.handleResetCount;
        this.handleDecCount = props.handleDecCount;
    }

    compo

    UNSAFE_componentWillReceiveProps(props){
        this.count = props.count;
        // console.log(props)
    }

    render(){
        return(
            <React.Fragment>
                <div>
                Counter -> {this.count}
                </div>
                <div>
                    <button onClick={()=>this.handleIncCount()}>+</button>
                    <button onClick={()=>this.handleResetCount()}>Reset</button>
                    <button onClick={()=>this.handleDecCount()}>-</button>
                </div>
            </React.Fragment>
        )
    }

}


export default Second;