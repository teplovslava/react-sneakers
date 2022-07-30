import style from './Item.module.css'
import { useState } from 'react'

const Item = ({item,index,onPlus1}) =>{
    const [isAdded,setAdded] = useState(false)

    function onPlus(){
        onPlus1(item,index)
        setAdded(!isAdded)
      }

    return (
        <div className={style.main}>
            <div key={index} className={style.item}>
            <div key={'awcac'+index} className={style.itemTop}>
            <img width={133} height={112} src={item.src} alt={item.name} className={style.itemImg}/>
            <h5 className={style.itemName} key={index}>{item.name}</h5>
            </div>
            <div key={"efgrsef"+index} className={style.itemFlex}>
            <div key={"efaefbve"+index} className={style.itemBottom}>
            <span className={style.itemCost}>Цена:</span>
            <b className={style.itemCostCount}>{item.cost}</b>
            </div>
                <img onClick={onPlus} className={style.itemAddBtn} src={isAdded?'/img/added.png':'/img/Group 91.png'} alt=" "/>
            </div>
            <button className={style.favouriteBtn}>
                <img src='/img/Group 90.png' alt=""/>
            </button>
            </div>
        </div>




    )
}

export default Item