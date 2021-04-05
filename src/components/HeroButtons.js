import React from 'react';


export const HeroButtons = ({ styleClass, onClick }) => {
    return (
        <button onClick={onClick} type="button" className={`btn ${styleClass}`}></button>
    )
}

export default HeroButtons