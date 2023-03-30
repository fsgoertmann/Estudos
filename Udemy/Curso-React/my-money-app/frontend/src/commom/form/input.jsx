import React from 'react'

export default props => (
    <input {...props.input}
        className="form-control"
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        type={props.type} />

)