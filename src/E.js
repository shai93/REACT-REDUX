import React from 'react';
import { UserConsumer } from './User';


class E extends React.Component{

    render(){
        return(
            <UserConsumer>
                {
                 (count,username)=>{
                     return (<div>{count}{username}</div>)
                 }
                }
            </UserConsumer>
        )
        
    }
}

export default E