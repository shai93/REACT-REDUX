import React from 'react';
import ReactDOM from 'react-dom';

class Portalroot extends React.Component{

    render(){
        return(
            
            ReactDOM.createPortal( <div>
                This is PortalRoot COmponent
            </div>, document.getElementById('portalroot'))
        )
        
    }
}

export default Portalroot