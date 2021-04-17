import React from "react";
import { FormTitle } from "../../FormTitle/FormTitle";
import { ResetForm } from "../../ResetForm/ResetForm";
import styles from "./Reset.module.scss";


export const Reset = () => {
  
  return (
    <div className={styles.root}>
      <div className="container">
          <FormTitle title={`Reset Password`}/>
          <ResetForm/>
      </div>
    </div>
  );
};
