import React from 'react'
import styles from './SubmitButton.module.scss'

export const SubmitButton = ({value, clsName}) => {
    return <input type="submit" value={value || `Find Bootcamps`} className={`${styles.btn} ${clsName || ''}`}/>
}
