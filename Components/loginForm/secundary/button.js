import React from "react";
import style from './button.module.css'


export default function Btn(props) {
    const id = props.id  
    const text = props.children
    return (
        <button onClick={props.onClick} id={id} className={style.btn}>{text}</button>
    );
  }