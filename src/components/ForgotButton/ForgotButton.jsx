import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ForgotButton.module.scss'

export const ForgotButton = () => {
    return (
        
        <div className={styles.forgotButtonContainer}>
            <span className={styles.text}>Forgot Password?</span>
            <NavLink to={'/Reset'} className={styles.btn}>Reset Password</NavLink>
        </div>
    )
}
