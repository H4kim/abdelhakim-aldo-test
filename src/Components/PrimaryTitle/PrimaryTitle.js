import classes from './PrimaryTitle.module.css'
import React from 'react'

const PrimaryTitle = ({text}) => {
    return (
        <p className={classes.title}>
            {text}
        </p>
    )
}

export default PrimaryTitle
