import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateThunk } from "../../redux/updateReducer/updateActions";
import { CustomInput } from "../CustomInput/CustomInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import styles from './UpdateForm.module.scss';

export const UpdateForm = () => {

  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch()
  const history = useHistory()
  const success = useSelector(state => state.update.success)
  
  const onSubmit = (data) => {
    data = Object.fromEntries(Object.entries(data).filter(e => {
        return e[0] !== 'confirmNewPassword'
      }));
      dispatch(updateThunk(data))
  };
  const password = useRef({});
    password.current = watch("newPassword", "")

  useEffect(() => {
      if(success){
          history.push('/Login')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[success])


  const currentPasswordInput = {
    name:'currentPassword',
    text:'Current Password',
    register,
    errors,
    required:true,
    placeholder:'Current Password',
    type:'password',
    autocomplete:false
  }
  const newPasswordInput = {
    name:'newPassword',
    text:'New Password',
    register,
    errors,
    required:true,
    placeholder:'New Password',
    type:'password',
    autocomplete:false
  }
  const confirmNewPasswordInput = {
    name:'confirmNewPassword',
    text:'Confirm New Password',
    register,
    refForMatch:password.current,
    errors,
    required:true,
    placeholder:'Confirm New Password',
    type:'password',
    autocomplete:false
  }

  return (
    <>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
          </div>
          <div className={styles.inputContainer}>
                <CustomInput {...currentPasswordInput}/>
                <CustomInput {...newPasswordInput}/>
                <CustomInput {...confirmNewPasswordInput}/>
          </div>
          <SubmitButton value={'Update Password'} clsName={styles.clsName}/>
        </form>
    </>
  );
};
