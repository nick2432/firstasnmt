import React, { useState } from 'react'
import './Details.css'
import { MdNotificationAdd } from 'react-icons/md';
import { MdOutlineArrowBack } from 'react-icons/md';
import {BsCart2} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
export default function Cloth(props) {
  const [iss, setiss] = useState(1);
  const [ism, setism] = useState(1);
  const [isl, setisl] = useState(1);
  const navigate = useNavigate();
  const handlclk=()=>{
    setiss(!iss);
    setism(1);
    setisl(1);
  }
  const handlclk1=()=>{
    setiss(1);
    setism(!ism);
    setisl(1);
  }
  const handlclk2=()=>{
    setiss(1);
    setism(1);
    setisl(!isl);
  }
  const addcart=()=>{
    navigate('./Addcart')
  }
  return (
    <div className='detailsbackground'>
       <div className='headerdetails'>
          <MdOutlineArrowBack />
          <p style={{fontWeight:"610"}}>Details</p>
          <MdNotificationAdd />
       </div>
       <div className='detailsbox'>
        <img className='detailsimg'src={props.details}/>
        <p style={{fontSize:'1.6rem'}}>Regular fit slogan</p>
        <div className='rating'>
          <AiFillStar style={{color:'#FFA928',fontSize:'1.3rem'}}/>
          <p>4.5/5</p>
          <p>(45 reviews)</p>
        </div>
        <p className='bigpara'>
          THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.
        </p>
        <p style={{fontWeight:'400',fontSize:'1.5rem'}}>
          Chosse size
        </p>
        <div className='sizebox'>
          <div onClick={handlclk} className={`size ${iss?'':'s1'}`}>S</div>
          <div onClick={handlclk1} className={`size ${ism?'':'s1'}`}>M</div >
          <div onClick={handlclk2} className={`size ${isl?'':'s1'}`}>L</div>
        </div>
       </div>
       <div className='footer'>
         <div>
          <p style={{fontWeight:'300'}}>Price</p>
          <p style={{fontWeight:'500',fontSize:'1.4rem'}}>INR 1190</p>
         </div>
         <button onClick={addcart} className='btn'>
          <BsCart2 style={{strokeWidth:'1px',marginRight:'5px'}}/>
            Add to cart
         </button>
       </div>
    </div>
  )
}
