import style from './Item.module.css'

const Item = ({item}) =>{
    return (
        <div className={style.main}>
            {item.map((item,index)=>(
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
            <button className={style.itemAddBtn}>
                <img src='/img/Group 91.png' alt=" "/>
            </button>
            </div>
            <button className={style.favouriteBtn}>
                <img src='/img/Group 90.png' alt=""/>
            </button>
            </div>
            ))}
        </div>




    )
}

export default Item