import React from "react";
import { MY__CUSTOM__ERROR__CLASS__NAME } from '../globalConstants';
import styles from './CustomInput.module.scss';

export const CustomInput = ({ refForMatch, errors, required = false, autocomplete, text, register, name, placeholder, type, clsName }) => {
  return (
   <div className={styles.root}>
     {text && <span className={styles.span}>{text}</span>}
      <input
        className={`${styles.input} ${clsName ? clsName : ''} ${name && errors && errors[name] && MY__CUSTOM__ERROR__CLASS__NAME }`}
        name={name || "set name for send"}
        ref={ register && ((name === 'confirmPassword') || (name === 'confirmNewPassword')) 
        ? register({validate: value => {
          return  value === refForMatch || false
        }}) 
        : register ? register({required:required}) : null}
        placeholder={placeholder || ""}
        type={type || "text"}
        autoComplete={autocomplete ? 'on' : 'off'}
      />
   </div>
  );
};
