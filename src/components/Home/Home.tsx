import React from 'react'
import { CustomForm } from '../CustomForm/CustomForm'
import styles from './Home.module.scss'

export const Home:React.FC = () => {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className={styles.innerContainer}>
                    <div className={styles.title}>
                        <h1>Find a Code Bootcamp</h1>
                        <span>Find, rate and read reviews on coding bootcamps</span>
                    </div>
                    <CustomForm/>
                </div>
            </div>
        </section>
    )
}
