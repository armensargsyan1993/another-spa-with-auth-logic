import React from "react";
import { FormTitle } from "../FormTitle/FormTitle";
import { UpdateForm } from "../UpdateForm/UpdateForm";
import styles from "./Update.module.scss";


export const Update = () => {
  return (
    <div className={styles.root}>
      <div className="container">
          <FormTitle title={`Update`}/>
          <UpdateForm/>
      </div>
    </div>
  );
};