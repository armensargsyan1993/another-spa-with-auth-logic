import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from '../../redux/logoutReducer/logoutActions'
import { icons } from '../icons'
import { NavLinkCreator } from '../NavLinkCreator/NavLinkCreator'
import { SvgCreator } from '../SvgCreator/SvgCreator'
import styles from './Navbar.module.scss'


export const Navbar = () => {
    
    const successLogin = useSelector(state => state.login.success)
    const successLogout = useSelector(state => state.logout.success)
    const dispatch = useDispatch()
    
    const handleChange = () => {
        dispatch(logoutThunk())
    }

    const options = [
        { key: 'logout',value: 'logout', label: 'logout' },
      ];
      const defaultOption = options[0];

    let queryArr = successLogin && !successLogout ? 
    [
        {linkName:'Update Password'},
        {linkName: localStorage.getItem('userEmail') || 'Account',svgHref:`${icons.account}#accountLogo`},
        [<Dropdown key="dropDown" options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" />]
    ] : 
    [
        {linkName:'Login',svgHref:`${icons.login}#loginLogo`},  
        {linkName:'Register',svgHref:`${icons.register}#registerLogo`},
    ]

    const arr = [
    {linkName:'Home'},
    ...queryArr,
    {line:true,key:'line1'},
    {linkName:'BrowseBootcamps'}
]
    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.innerContainer}>
                    <div className={styles.logo}>
                        <SvgCreator clsName={styles.svg} svgHref={`${icons.computer}#computerLogo`}/>
                        <p>DevCamper</p>
                    </div>
                    <nav className={styles.nav}>
                        <NavLinkCreator navArr={arr}/>
                    </nav>
                </div>
            </div>
        </div>
    )
}
