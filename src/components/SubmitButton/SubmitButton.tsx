import React from 'react'
import styles from './SubmitButton.module.scss'

interface ISubmitButtonProps {
    value?:string,
    clsName?:string
}

export const SubmitButton:React.FC<ISubmitButtonProps> = ({value, clsName}) => {
    return <input type="submit" value={value || `Find Bootcamps`} className={`${styles.btn} ${clsName || ''}`}/>
}
