import React from "react";
import style from './button.module.css'


export default function Btn(props) {
    const id = props.id  
    const text = props.children
    return (
        <button onClick={props.action} id={id} className={style.btn}>{text}</button>
    );
  }