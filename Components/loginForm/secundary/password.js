import style from './password.module.css'
import React from "react";

export default function Input(props) {
    return (
        <div className={style.grid}>
            <p className={style.password}>password</p>
            <input type="password" placeholder='password' onChange={props.onChange} className={style.input}></input>
        </div>
    );
  }
