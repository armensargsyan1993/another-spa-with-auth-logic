import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { registerActions, registerThunk } from '../../redux/registerReducer/registerActions';
import { CustomInput } from '../CustomInput/CustomInput';
import { CustomRadioInput } from '../CustomRadioInput/CustomRadioInput';
import { useSelector } from '../overrideHooks';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import styles from './RegisterForm.module.scss';


export const RegisterForm:React.FC = () => {

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
        dispatch(registerActions.reset())
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[success])

    

    const onSubmit = (data:IRegisterPayload) => {
      delete data.confirmPassword
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
        refForMatch:password,
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


export interface IRegisterPayload {
  name:string,
  email:string,
  password:string,
  role:string,
  confirmPassword?:string
}