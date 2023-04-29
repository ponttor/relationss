import React from 'react';
import classes from './MyTop.module.css';

function MyTop({children, ...props}) {
  return (
    <p {...props} className={classes.myTop}>{children}</p>
  )
}

export default MyTop