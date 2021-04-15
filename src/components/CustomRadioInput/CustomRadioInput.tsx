import React from 'react'
import { MY__CUSTOM__ERROR__CLASS__NAME } from '../globalConstants'
import styles from './CustomRadioInput.module.scss'

interface ICustomRadioInputProps{ 
    required:boolean, 
    errors:any, 
    title:string, 
    register:any, 
    name:string, 
    clsName?:string, 
    radios:Array<IRadios>
}
interface IRadios {
    id:number,
    value:string,
    text:string,
}


export const CustomRadioInput:React.FC<ICustomRadioInputProps> = ({ required = false, errors, title, register, name, clsName, radios }) => {
    return (
        <div className={`${styles.root} ${name && errors && errors[name] && MY__CUSTOM__ERROR__CLASS__NAME }`}>
            <h3 className={styles.title}>{title}</h3>
        {radios.map((e,i) => {
            return (
                <div key={e.id} className={styles.inputContainer}>
                    <input value={e.value} className={styles.input} ref={register({required:required})} name={name} type='radio'/>
                    <span className={styles.span}>{e.text}</span>
                </div>
            )
        })}
      </div>
    )
}
