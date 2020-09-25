import React from 'react';
const inputs = (props) => {
    return (
        <div className="Input">
            <input type="text" onChange={props.changed} value={props.currentName}/>
        </div>
    )
}

export default inputs;