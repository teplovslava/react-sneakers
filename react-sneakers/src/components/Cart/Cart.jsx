import style from './Cart.module.css'

const Cart =(props)=>{
    return(
        <div className={style.overlay}>
        <div className={style.cart}>
          <div className={style.cartMainContent}>
            <div className={style.cartClose}> 
              <h3 className={style.cartH3}>Корзина</h3>
              <img className={style.closeBtn} onClick={props.onCloseCart} src='/img/close.png' alt='close'/>
              </div>
              
          <div className={style.cartItems}>
            {
              props.cardItem.map((item,index)=>(<div className={style.cardItemContent}> 
              <img width={60} height={45} style={{marginRight:"10px"}}src={item.src} alt=''/>
                <div className={style.cardItemLeft}> 
                <p className={style.cardItemName}>{item.name}</p>
                <b className={style.cardItemCost}>{item.cost}</b>
                </div>
                <img onClick={()=>props.onDelete(item.id)} width={20} height={20} className={style.cardCloseImg} src='/img/close.png' alt='close'/>
              </div>))
            }
          </div>
          <ul className={style.total}>
            <li className={style.totalItem}>
              <span>Итого:</span>
              <div className={style.dashed}></div>
              <p className={style.cost}>2 500 руб.</p>
            </li>
            <li className={style.totalItem}>
              <span>Налог 5%</span>
              <div className={style.dashed}></div>
              <p className={style.cost}>125 руб.</p>
            </li>
          </ul>
          <button className={style.greenBtn}>Оформить заказ<img className={style.greenBtnImg} src="/img/Group.png" alt=' '/></button>
          </div>
          
        </div>
      </div>
    )
}

export default Cart