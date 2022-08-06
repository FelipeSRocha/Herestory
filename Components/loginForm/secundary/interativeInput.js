import style from './interativeInput.module.css'
import React from "react";

export default function InterativInput(props) {
    return (
        <div className={style.grid}>
            <p className={style.bemvindo}>Bem vindo,</p>
            <p className={style.username}>{props.username}</p>
            <input placeholder='Username' onChange={props.onChange}></input>
        </div>
    );
  }
