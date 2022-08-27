import style from './interativeInput.module.css'
import React from "react";

export default function InterativInput(props) {
    return (
        <div className={style.grid}>
            <p className={style.bemvindo}>Welcome,</p>
            <input placeholder='Username' onChange={props.onChange} className={style.input}></input>
        </div>
    );
  }
