import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { registerThunk, registerReset } from '../../redux/registerReducer/registerActions';
import { CustomInput } from '../CustomInput/CustomInput';
import { CustomRadioInput } from '../CustomRadioInput/CustomRadioInput';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import styles from './RegisterForm.module.scss';



export const RegisterForm = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch()
    const history = useHistory()

    const success = useSelector(state => state.register.success)

    const password = useRef({});
    password.current = watch("password", "")
    
    useEffect(() => {
      if(success){
        history.push('/Login')
      }
      return () => {
        dispatch(registerReset())
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[success])


    const onSubmit = (data) => {
      data = Object.fromEntries(Object.entries(data).filter(e => {
        return e[0] !== 'confirmPassword'
      }))
      dispatch(registerThunk(data))
    };
  
    const nameInput = {
      name:'name',
      text:'Name',
      register,
      errors,
      required:true,
      placeholder:'Enter Full Name',
    }
    const emailAddressInput = {
      name:'email',
      text:'Email Address',
      register,
      errors,
      required:true,
      placeholder:'Enter Email',
    }
    const passwordInput = {
        name:'password',
        text:'Password',
        register,
        errors,
        required:true,
        placeholder:'Enter Password',
        type:'password',
      }
      const confirmPassword = {
        name:'confirmPassword',
        text:'Confirm Password',
        register,
        refForMatch:password.current,
        required:true,
        errors,
        placeholder:'Confirm Password',
        type:'password',
      }

      const userRole = {
          name:'role',
          title:'User Role',
          register,
          errors,
          required:true,
          radios:[
            {
            id:1,
            value:'publisher',
            text:'Regular User (Browse, Write reviews, etc)',
            },
            {
            id:2,
            value:'publisher',
            text:'Bootcamp Publisher'
            }
          ]
      }
  
    return (
      <>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
                  <CustomInput {...nameInput}/>
                  <CustomInput {...emailAddressInput}/>
                  <CustomInput {...passwordInput}/>
                  <CustomInput {...confirmPassword}/>
                  <CustomRadioInput {...userRole}/>
            </div>
            <span className={styles.redText}>* You must be affiliated with the bootcamp in some way in order to add it to DevCamper.</span>
            <SubmitButton value={'Register'} clsName={styles.clsName}/>
          </form>
      </>
    );
}
