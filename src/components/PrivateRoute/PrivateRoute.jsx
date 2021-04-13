
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Update } from '../Update/Update'
import styles from './PrivateRoute.module.scss'

export const PrivateRoute = () => {
    const success = useSelector(state => state.login.success)
    const history = useHistory()
    useEffect(() => {
        if(!success){
            history.push('./home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className={styles.root}>
            {success ?  <div className={styles.root}>
                        <Update/>
                    </div>
                : null}
        </div>
    )
}
                            