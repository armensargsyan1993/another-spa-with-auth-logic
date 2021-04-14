import React from "react";
import { MY__CUSTOM__ERROR__CLASS__NAME } from '../globalConstants';
import styles from './CustomInput.module.scss';

//TODO refactoring logic

export const CustomInput:React.FC<CustomInputTypes> = ({ refForMatch, errors, required = false, autocomplete, text, register, name, placeholder, type, clsName }) => {
  return (
   <div className={styles.root}>
     {text && <span className={styles.span}>{text}</span>}
      <input
        className={`${styles.input} ${clsName ? clsName : ''} ${name && errors && errors[name] && MY__CUSTOM__ERROR__CLASS__NAME }`}
        name={name || "set name for send"}
        ref={ 
          register && ((name === 'confirmPassword') || (name === 'confirmNewPassword')) 
        ? register({validate: (value:string) => {
          return  value === refForMatch!.current || false
        }})
        : register ? register({required:required}) : null}
        placeholder={placeholder || ""}
        type={type || "text"}
        autoComplete={autocomplete ? 'on' : 'off'}
      />
   </div>
  );
};

interface CustomInputTypes{ 
  refForMatch?:any,
  errors:any, 
  required?:boolean, 
  autocomplete?:boolean, 
  text:string, 
  register:any, 
  name:string, 
  placeholder:string, 
  type?:string, 
  clsName?:string
}