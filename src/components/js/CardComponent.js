import React from "react";
import CC from '../css/CardComponent.module.css'

export default function CardComponent(props) {

    return (
        <div
            className={`${CC.parent} ${props.solid
            ? CC.parentSolid
            : null}`}>
            <div className={CC.cardImg} >
                {props.cardImage}
            </div>
            <div className={CC.title}>
                {props.cardTitle}
            </div>
            <div>
                {props.content}
            </div>
        </div>
    )

}