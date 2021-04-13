import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { resetThunk } from "../../redux/resetReducer/resetActions";
import { CustomInput } from "../CustomInput/CustomInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import styles from "./ResetForm.module.scss";

export const ResetForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();
  const success = useSelector((state) => state.reset.success);

  const onSubmit = (data) => {
    dispatch(resetThunk(data));
  };

  const password = useRef({});
  password.current = watch("newPassword", "");

  useEffect(() => {
    if (success) {
      history.push("/Login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const resetPassWord = {
    name: "email",
    text: "Enter Email",
    register,
    errors,
    required: true,
    placeholder: "Enter address",
    type: "text",
    autocomplete: false,
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}></div>
        <div className={styles.inputContainer}>
          <CustomInput {...resetPassWord} />
        </div>
        <SubmitButton value={"Reset Password"} clsName={styles.clsName} />
      </form>
    </>
  );
};
