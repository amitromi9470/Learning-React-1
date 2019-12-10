import React from 'react';
import './UserOutput.css'
const userOutput = ( props ) => {
return(
    <div className="UserOutput">
        <p>username:{props.userName}</p>
        <p>i am overritten!!</p>
    </div>
    );
    
};
export default userOutput;