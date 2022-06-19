import React from "react";
import WBS from '../css/WhiteBox.module.css'

export default function WhiteBox(props){

    return (
        <div className={WBS.main} >
            <div className={props.solid ? WBS.solid : ''} >
                {props.value}
            </div>
        </div>
    )
}