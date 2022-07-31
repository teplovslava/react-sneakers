import style from './App.module.css'
import search from '../assets/img/search.svg'
import Item from '../components/Item/Item'
import Cart from '../components/Cart/Cart'
import Header from '../components/Header/Header'
import { useState,useEffect } from 'react'
import axios from 'axios'


function App() {
  const [item,setItem]= useState(
    []
  )

  useEffect(()=>
    {axios.get('https://62e3c1ef3c89b95396cfb80f.mockapi.io/sneakers').then((res)=>{setItem(res.data)});
    axios.get('https://62e3c1ef3c89b95396cfb80f.mockapi.io/cart').then((res)=>{setCardItem(res.data)})},[])


  const [isOpenedCard, setIsOpenedCard] = useState(false)
  const [cardItem, setCardItem] = useState([])
  const [searching,setSearch]= useState('')

  function onClickPlus(obj){
    axios.post('https://62e3c1ef3c89b95396cfb80f.mockapi.io/cart',obj)
    setCardItem([...cardItem,obj])
  }
  function onInput(event){
    setSearch(event.target.value)
  }

  function onDelete(id){
    setCardItem((prev)=>prev.filter(item=>item.id!==id))
    axios.delete(`https://62e3c1ef3c89b95396cfb80f.mockapi.io/cart/${id}`)

  }


  return (
  <div className={style.wrapper}>
    {isOpenedCard&&<Cart cardItem={cardItem} setCardItem={setCardItem} onDelete={onDelete} onCloseCart={()=>(setIsOpenedCard(false))}/>}
    <Header onClickCart={()=>(setIsOpenedCard(true))}/>
      <div className={style.mainContent}>
        <div className={style.headerBottom}>
        <h1 className={style.h1}>{searching?`Поиск по запросу '${searching}'`:'Все кроссовки'}</h1>
        <div className={style.search}>
          <img className={style.searchLogo} src={search} alt='search'/>
          <input onChange={onInput} value={searching} className={style.input} placeholder='Поиск...'/>
        </div>
        </div>
        <div className={style.itemStyle}>
          {item.length>0?item.filter(item=>item.name.toLowerCase().includes(searching.toLowerCase()))
        .map((item,index)=><Item key={index} index={index} onPlus1={obj=>onClickPlus(obj)} item={item}/>):    
        <div className={style.loader}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>
        <span className={style.span}>Loading</span>
    </div>}
        
        </div>
      </div>
  </div>
  );
}

export default App;
 