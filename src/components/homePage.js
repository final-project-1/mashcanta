import React from 'react';
import { Link, useHistory } from "react-router-dom";
const HomePage = () => {
    const history = useHistory();

   
    return (
        <div>
            <button onClick={()=>{history.replace('/customerEntering')}}>לבקשת הלוואה</button>
            <button onClick={()=>{history.replace('/advisorEntering')}}>להצעת משכנתא</button> 
        </div>
    )
}

export default HomePage;