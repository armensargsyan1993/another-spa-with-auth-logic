import React from 'react'
import { icons } from '../../assets'
import { FormTitle } from '../../FormTitle/FormTitle'
import { RegisterForm } from '../../RegisterForm/RegisterForm'

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
