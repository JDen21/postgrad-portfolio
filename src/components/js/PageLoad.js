import { CircularProgress } from "@mui/material";
import React from "react";
import PageLoadStyle from '../css/PageLoad.module.css'


export default function PageLoad(){


    return(
        <div className={PageLoadStyle.outWrapper}  >
            <div className={PageLoadStyle.inWrapper} >
                <CircularProgress size={120} ></CircularProgress>
                <div className={PageLoadStyle.notif} ></div>
            </div>
        </div>
    )
}