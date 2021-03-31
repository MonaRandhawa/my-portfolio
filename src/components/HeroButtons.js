import React from 'react'

export const HeroButtons = ({ value, styleClass, onClick}) => {
    return (
        <button onClick={onClick} type="button" className={`btn ${styleClass=styleClass}`}>{value}</button>
    )
}

export default HeroButtons