import React from 'react'

const Error = (props) => {
    const close= ()=>{
        const errordiv = document.querySelector('.error-m');
        errordiv.style.display = 'none';
    }
    return (
        <div className="error-m">
            Error : {props.message}
            <button className='closebtn' onClick={close}>X</button>
        </div>
    )
}

export default Error