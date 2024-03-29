import React from 'react'
import style from './HeroComponent.module.css'
import handshakeImg from '../../assets/meetupgesture-preview.png'

export const HeroComponent = () => {
  return (
   <>
    <div className={style.heroContainer}>
        <p className={style.heroText}>Enjoy meetings with ConnectNow. Connect and build lasting relationships. Powered by the lightning-fast technology of ReactJS and LiveKit.</p>
        <img src={handshakeImg} alt="handshakeImg" className={style.handImg}/>
    </div>
    </>  
  )
}