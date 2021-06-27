import React from 'react';
import {useHistory} from 'react-router-dom';

const CEntering =()=>{
    const history = useHistory();
    return(
        <div>
            <button onClick={()=>{history.push('/singUp')}}>הרשמה</button>
            <button onClick={()=>{history.push('/singIn')}}>התחברות</button>
        </div>
    )
}
export default CEntering;