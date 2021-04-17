import React from 'react'
import { CustomForm } from '../../CustomForm/CustomForm'
import { CustomPaginate } from '../../CustomPaginate/CustomPaginate'
import { CustomSelectForm } from '../../CustomSelectForm/CustomSelectForm'
import styles from './BootCamps.module.scss'

export const BootCamps:React.FC = () => {

    return (
        <section className={styles.root}>
            <div className="container">
                <div className={styles.innerContainer}>
                    <aside className={styles.aside}>
                        <div className={styles.location}>
                            <CustomForm/>
                            <span>Filter</span>
                            <CustomSelectForm/>
                        </div>
                    </aside>
                    <div className={styles.cardContainer}>
                        <CustomPaginate/>
                    </div>
                </div>
            </div>
        </section>
    )
}
