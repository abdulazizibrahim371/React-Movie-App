import React from 'react';
const Input = ({name,label,value,error,onChange}) => {
    return (<div className="form-group">
    <label name="name" onChange={onChange} 
    value={value} htmlFor="name">{label}</label>
    <input id='name' type="text" className="form-control" />
    {error&&<div className="alert alert-danger">{error}</div>}
    </div>  );
}
 
export default Input;