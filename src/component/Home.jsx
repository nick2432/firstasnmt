import React, { useState } from 'react'
import './Home.css';
import { MdNotificationAdd } from 'react-icons/md';
import {LuSearch} from 'react-icons/lu'
import {BsFilterSquareFill} from 'react-icons/bs'
import {RiHome6Line} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
let menu =[
    {
        "url":require('./Screenshot from 2023-07-18 00-39-43.png'),
        "name":"Regular fit slogan",
        "price":"1190",
    },
    {
        "url":require('./Screenshot from 2023-07-18 00-41-03.png'),
        "name":"Regular fit polo",
        "price":"1610",
    },
    {
        "url":require('./Screenshot from 2023-07-18 00-41-34.png'),
        "name":"Regular fit color block",
        "price":"1890",
    },
    {
        "url":require('./Screenshot from 2023-07-18 00-39-43.png'),
        "name":"Regular fit v-neck",
        "price":"1600",
    },
    {
        "url":require('./Screenshot from 2023-07-18 00-41-03.png'),
        "name":"Regular",
        "price":"1760",
    },
    {
        "url":require('./Screenshot from 2023-07-18 00-39-43.png'),
        "name":"Regular",
        "price":"1190",
    },
    {
        "url":require('./Screenshot from 2023-07-18 00-41-03.png'),
        "name":"Regular",
        "price":"1760",
    },
    {
        "url":require('./Screenshot from 2023-07-18 00-39-43.png'),
        "name":"Regular",
        "price":"1190",
    },
];
export default function Home(props) {
    const [isall, setisall] = useState(1);
    const navigate = useNavigate();
    const handleclick=()=>{
        setisall(!isall);
    }
    const handleclick2 =(data)=>{
        console.log(data.url);
        props.setdetail(data.url);
        navigate('/Details');
    }
  return (
    <div className='homebackground'>
       <div className='header'>
          <p style={{fontWeight:"650"}}>Discover</p>
          <MdNotificationAdd style={{marginTop:'5px',cursor:'pointer'}}/>
       </div>
       <div className='searchbox'>
        <LuSearch className='searchicon'/>
        <input className='input' placeholder='Search anything'></input>
        <BsFilterSquareFill style={{fontSize:'2.88rem'}}/>
       </div>
       <div className='select'>
            {(isall)?
            <div className='smallbox' style={{backgroundColor:'black',color:'white'}} onClick={handleclick}>All</div>:
            <div className='smallbox' onClick={handleclick}>All</div>}
            <div className='smallbox' onClick={handleclick}>Men</div>
            <div className='smallbox' onClick={handleclick}>Women</div>
            <div className='smallbox' onClick={handleclick}>Kids</div>
       </div>
       <div className='menu'>
       
         {
            menu.map((data)=>{
                return(
                    <div className='menubox' onClick={() => handleclick2(data)}>
                            <img  className='image' 
                                src={data.url}
                            />
                        <div className='details'>
                        <p style={{fontWeight:'600'}}>{data.name}</p>
                        <p style={{fontWeight:'240',fontSize:'0.8rem',marginBottom:'8px'}}>INR {data.price}</p>
                        </div>
                    </div> 
                )
            })
         }
       </div>
       <div className='footer'>
         <RiHome6Line  style={{fontSize:'1.98rem', strokeWidth:'1px'}}/>
         <AiOutlineHeart  style={{fontSize:'1.98rem'}}/>
         <BsCart2  style={{fontSize:'1.98rem'}}/>
         <AiOutlineSetting  style={{fontSize:'1.98rem'}}/>
       </div>
    </div>
  )
}