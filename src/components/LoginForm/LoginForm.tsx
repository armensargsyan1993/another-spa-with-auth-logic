import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../..";
import { loginThunk, routeComplete } from "../../redux/loginReducer/loginActions";
import { useTypedSelector } from "../customHooks";
import { CustomInput } from "../CustomInput/CustomInput";
import { ForgotButton } from "../ForgotButton/ForgotButton";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import styles from './LoginForm.module.scss';

export const LoginForm = () => {

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch()
  const history = useHistory()
  const success = useSelector((state:RootState) => state.login.success)
  const isRouteCompile = useSelector((state:RootState) => state.login.isRouteComplete)
  const xxx = useSelector((state:RootState) => state)
  const onSubmit = (data:any) => {
    dispatch(loginThunk(data))
  };


  useEffect(() => {
    if(success && isRouteCompile){
      history.push('/BrowseBootCamps')
    }
    return () => {
      dispatch(routeComplete())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[success,isRouteCompile])

  const passwordInput = {
    name:'password',
    text:'Password',
    register,
    errors,
    required:true,
    placeholder:'Enter Password',
    type:'password',
    autocomplete:true
  }
  const emailAddressInput = {
    name:'email',
    text:'Email Address',
    register,
    errors,
    required:true,
    placeholder:'Enter Email',
    type:'text',
    autocomplete:true
  }

  return (
    <>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
          </div>
          <div className={styles.inputContainer}>
                <CustomInput {...passwordInput}/>
                <CustomInput {...emailAddressInput}/>
          </div>
          <SubmitButton value={'Login'} clsName={styles.clsName}/>
        </form>
        <ForgotButton/>
    </>
  );
};
