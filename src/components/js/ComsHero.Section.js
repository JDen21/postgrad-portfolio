import React from "react";
import waiter from '../../resources/waiter.svg'
import CH from '../css/ComsHero.module.css'

export default function ComsHero() {

    return (
        <section className={ CH.parent } >
            <div className={ CH.parentBox } >
                <div className={CH.leftBox} >
                    <div className={CH.message} > Canteen Ordering And Management System </div>
                    <div className={CH.leftTop}  >Canteen Ordering And</div>
                    <div className={CH.leftBottom} >Management System</div>
                </div>

                <div className={CH.right} >
                    <img className={CH.rightImg} src={waiter} alt='waiter hero' />
                </div>
            </div>
        </section>
    )
}