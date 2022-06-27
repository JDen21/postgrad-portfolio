import React from 'react'
import front from '../../resources/ComsFront.png'
import foodSelect from '../../resources/ComsFoodSelection.png'
import orderConfirm from '../../resources/ComsOrderConfirm.png'
import orderNumber from '../../resources/ComsOrderNumber.png'
import orderSummary from '../../resources/ComsOrderSummary.png'
import orderStore from '../../resources/ComsStores.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CC from '../css/ComsConcept.module.css'

export default function ComsConcept(){


    return(
        <section  >
        <div className={CC.title} >The Concept</div>
        <div className={CC.parent} >
        <LazyLoadImage
             alt='COMS front page'
             src={front}
             effect="blur"
             className={`${CC.img}`}
             />
             <div> Open the Site or App </div>
             <div className={`${CC.reallign}`} >Select your Favourite Store!</div>
             <LazyLoadImage 
              alt='selection of stores'
              src={orderStore}
              effect='blur'
              className={`${CC.img}`}
             />
             <LazyLoadImage
              alt='selection of snacks and drinks available in store'
              src={foodSelect}
              effect='blur'  
              className={`${CC.img}`}
             />
             <div>Grab your Food of the Day!</div>
             <div className={`${CC.reallign}`} >Check your Expenses in Summary</div>
             <LazyLoadImage 
              alt='order summary view page'
              src={orderSummary}  
              effect='blur'
              className={`${CC.img}`}
             />
             <LazyLoadImage 
              alt='Confirm counter'
              src={orderConfirm}
              effect='blur'
              className={`${CC.img}`}
             />
             <div>Confirm</div>
             <div className={`${CC.reallign}`} >Wait</div>
             <LazyLoadImage 
              alt='order number'
              src={orderNumber}
              effect='blur'
              className={`${CC.img}`}
             />
        </div>   
        </section>
    )
}
