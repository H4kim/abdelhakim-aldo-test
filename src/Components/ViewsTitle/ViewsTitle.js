import classes from './ViewsTitle.module.css'
import React from 'react'

const ViewsTitle = ({text}) => {
    return (
        <p className={classes.title}>{text}</p>
    )
}

export default ViewsTitle
