import classes from './PrimaryTitle.module.css'
import React from 'react'

const PrimaryTitle = ({text}) => {
    return (
        <div className={classes.container}>
            {text}
        </div>
    )
}

export default PrimaryTitle
