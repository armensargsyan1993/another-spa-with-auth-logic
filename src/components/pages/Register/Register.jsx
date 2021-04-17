import React from 'react'
import { FormTitle } from '../../FormTitle/FormTitle'
import { RegisterForm } from '../../RegisterForm/RegisterForm'
import { icons } from '../icons'
import styles from './Register.module.scss'

export const Register = () => {
    return (
        <div className={styles.root}>
            <FormTitle 
            svgHref={`${icons.register}#registerLogo`}
            title={`Register`}
            text={`Register to list your bootcamp or rate, review and favorite bootcamps`}

            />
            <RegisterForm/>
        </div>
    )
}
