import styles from './Description.module.css';
import React from 'react';
import { useState,  } from 'react'; 
function  Description({openDescr,items,id}) {
   
    return (
    <div className={styles.wrapper} >
    <div className={styles.container}>
        <h2>Опис товару:</h2>
        <p> { items.map((obj,index) => (obj.id == id) ? obj.description : "") }</p> 
        <button onClick={() => openDescr()} >Повернутися назад</button>
    </div>
   </div>
    )}
    export default Description;