import React, { useEffect, useState } from 'react'
import './Addcart.css'
import { MdNotificationAdd } from 'react-icons/md';
import { MdOutlineArrowBack } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { IoMdArrowRoundForward } from 'react-icons/io';
let list =[
  {
      "url":require('./Screenshot from 2023-07-18 00-39-43.png'),
      "name":"Regular fit slogan",
      "size":'L',
      "qun":1,
      "price":"1190",
  },
  {
      "url":require('./Screenshot from 2023-07-18 00-41-03.png'),
      "name":"Regular fit polo",
      "size":'M',
      "qun":1,
      "price":"1610",
  },
  {
      "url":require('./Screenshot from 2023-07-18 00-41-34.png'),
      "name":"Regular fit color block",
      "size":'M',
      "qun":1,
      "price":"1890",
  },
];

export default function Addcart() {
  const [li, setli] = useState(list);
  const [subtotal,setsubtotal] = useState(5670);
  useEffect(()=>{
    let x=0;
    li.map((data)=>{
      x+=data.qun*data.price;
    })
    setsubtotal(x);
  },[li])
  const add = (idx) => {
    let subttl=0;
    const updatedList = li.map((data, i) => {
      if (i === idx) {
        return {
          ...data,
          qun: data.qun + 1,
        };
      }
      subttl=data.qun*data.price;
      return data;
    });
    setli(updatedList);
  };
  const substract=(idx)=>{
    if(li[idx].qun>=1){
    const updatedList = li.map((data, i) => {
      if (i === idx) {
        return {
          ...data,
          qun: data.qun - 1,
        };
      }
      return data;
    });

    setli(updatedList);
  }
  }
  const delete1=(idx)=>{
      const updatedList = li.filter((_, i) => i !== idx);
      setli(updatedList);
  }
  return (
    <div className='addcartbackground'>
      <div className='headerdetails'>
          <MdOutlineArrowBack />
          <p style={{fontWeight:"610"}}>My Cart</p>
          <MdNotificationAdd />
      </div>
      <div className='list'>
         {
          li.map((data,idx)=>{
            console.log(data.qun,"dfsa");
            return(
              <div className='item'>
                 <img  className='listimage' 
                    src={data.url}
                />
                <div className='item-details'>
                  <div className='name-'>
                    <div>
                    <p>
                      {data.name}
                    </p>
                    <p style={{fontWeight:'200'}}>
                      size {data.size}
                    </p>
                    </div>
                    <BsTrash onClick={()=>{delete1(idx)}} style={{cursor:'pointer',color:'red',marginRight:'10px'}} />
                  </div>
                  <div className='mony-'>
                    <p>
                      INR {data.price}
                    </p>
                    <div className='quantitycontroller'>
                      <button onClick={() => substract(idx)} className='btnq'>
                        -
                      </button>
                      <p>{data.qun}</p>
                      <button onClick={() => add(idx)}  className='btnq'>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
         } 
      </div>
      <div className='voucherbox'>
        <p style={{marginLeft:'10px'}}>Add a voucher</p>
      </div>
      <div className='pricetable'>
         <div className='pricevalue'>
          <p>Sub-total</p>
          <p>INR {subtotal}</p>
         </div>
         <div className='pricevalue'>
          <p>Vat (%)</p>
          <p>INR 0.00</p>
         </div>
         <div className='pricevalue'>
            <p>Shopping fee</p>
            <p>INR 80</p>
         </div>
      </div>
      <div className='totalprice'>
        <p style={{marginTop:'20px'}}>Total</p>
        <p style={{marginTop:'20px'}}>INR {subtotal+80}</p>
      </div>
     
      <div className='footer'>
         <button className='mycartbtn'>
          Checkout
          <IoMdArrowRoundForward style={{color:'white',fontSize:'20px'}}/>
         </button>
       </div>
    </div>
  )
}
