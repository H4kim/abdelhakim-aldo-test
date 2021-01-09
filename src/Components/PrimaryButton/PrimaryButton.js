import classes from './PrimaryButton.module.css'
import React from 'react'

const PrimaryButton = ({text, clicked}) => {
    return (
        <div className={classes.container} onClick={clicked}>
            {text}
        </div>
    )
}

export default PrimaryButton
