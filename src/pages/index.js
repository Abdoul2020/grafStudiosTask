import GlobalControllerLayout from '../layout/global-controller-layout'
import contentPage from '../components/body/contentPage';
import StickyBox from "react-sticky-box";
import { Grid } from "@mui/material";
import React,{useEffect, useState, useMemo} from "react";
import Typography from '@mui/material/Typography';
import { IoSwapVerticalOutline,IoCaretDown } from "react-icons/io5";
import {VscSettings, VscVerifiedFilled} from "react-icons/vsc";
import {GoogleMap, useLoadScript, Marker}  from "@react-google-maps/api";
import {MdLocationPin} from "react-icons/md";
import {HiVideoCamera} from "react-icons/hi";

import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker'
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css'
import { width } from '@mui/system';

// date
import { generateDate, months } from "../components/calendar/calendar";
import cn from "../components/calendar/cn";

import dayjs from "dayjs";
import { TiMediaPlayReverse, TiMediaPlay } from "react-icons/ti";


import { BiCalendarX } from "react-icons/bi";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import contactFom from "../components/contactForm/contactFom";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

import {  VscChevronDown, VscChevronUp } from "react-icons/vsc";








// form tekliff part from here
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};









export default function Home() {


  const [productKontrol, setproductKontrol]= useState(false)
    const [markalarPro, setmarkalarPro]= useState(false)
    const [hakkimizdaPro, sethakkimizdaPro]= useState(false)
    const [kulaniciSozles, setkulaniciSozles]= useState(false);
    const [kisiSelVeri, setkisiSelVeri]= useState(false);
    const [gizlikCerez, setGizlikCerez]= useState(false);


  // date calculation start
const days = ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cts"]
const currentDate = dayjs();
const [today, setToday] = useState(currentDate);

const d = new Date();


const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

const [viewMoreTime, setviewMoreTime]= useState(false)
const[newdate,setnewdate]= useState("");
const [locationTab, setlocationTab]= useState(false)
const [videoTab, setvideoTab]= useState(true)
const [allFindResult , setallFindResult]= useState([

  {
    orderid:0,
    name:"uzm. Dr. JANE DOE",
    jobTitle:"CILDIYE Batık Tırnak Tedavisi",
    location: "İstanbul",
    status:"Online Görüşmeye Uygun",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
 verified:true,
 starRate:65,
 isOpenMore:false,
 availableDays: ["Pzt", "Sal", "Çar", "Per", "Cmt"],
 timeArray:["11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00","14:20", "14:40", "15:00", "15:20","15:40", "16:00", "16:40"]
  },
  {
    orderid:1,
    name:"uzm. Dr. JANE DOE",
    jobTitle:"CILDIYE Batık Tırnak Tedavisi",
    location: "İstanbul",
    status:"Online Görüşmeye Uygun",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
    verified:true,
 starRate:0,
 timeArray:["11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00","14:20", "14:40", "15:00", "15:20","15:40", "16:00", "16:40"],
isOpenMore:false,
availableDays: [ "Pzt", "Sal", "Çar", "Per"]
  },

  {
    orderid:2,
    name:"uzm. Dr. JANE DOE",
    jobTitle:"CILDIYE Batık Tırnak Tedavisi",
    location: "İstanbul",
    status:"Online Görüşmeye Uygun",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
    verified:true,
 starRate:0,
 timeArray:[],
isOpenMore:false,
  },
  {
    orderid:3,
    name:"uzm. Dr. JANE DOE",
    jobTitle:"CILDIYE Batık Tırnak ",
    location: "İstanbul",
    status:"Online Görüşmeye Uygun",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    verified:true,
 starRate:0,
 isOpenMore:false,
  },
  {
    orderid:4,
    name:"uzm. Dr. JANE DOE",
    jobTitle:"CILDIYE Batık Tırnak",
    location: "İstanbul",
    status:"Online Görüşmeye Uygun",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    verified:true,
 starRate:0,
 isOpenMore:false,
  }


])

const [selectDate, setSelectDate] = useState(currentDate)


 generateDate(today.month(), today.year());

 useEffect(() => {

  // a calculer

  
 }, [])
 



  const timeArray=["11:00", "11:20", "11:40", "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00","14:20", "14:40", "15:00", "15:20","15:40", "16:00", "16:40"]
  const [indexes, setIndexes] = useState(-200);

  useEffect(() => {
   

  }, [indexes])
  


const [clickpanelProfil, setclickpanelProfil]= useState("")
  const [valueSearch, setvalueSearch]=useState("Cildiye")
  const [doktorArrayLength, setdoktorArrayLength]= useState(36)
  const [onlineReview, setonlineReview]= useState(false)
  const [questionReview, setquestionReview]= useState(false)

  const {isLoaded}= useLoadScript({

    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,


  })



//can be centered
if(!isLoaded){
  return (
    <div>
      Harita Yükleniyor...
    </div>
  )
}

//map 
function Map(){

  const center= useMemo(()=>({lat:41.015137, lng:28.979530 }),[])

  return (
  
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapcontainer-name">

< Marker position={center}/>

    </GoogleMap>
  
  )
}

//  find Doctors from here to show


function OpenMore(id){
  setallFindResult(() =>
   allFindResult.map((s, i) =>
        s.orderid == id && s.isOpenMore != true
            ? { ...s, isOpenMore: true }
          : { ...s, isOpenMore: false }
      )
    );
}


// tabe 



const prevBtn = (id) => {

  if(indexes===0){
    setIndexes(-100)
  }else{

    allFindResult.map((s, i) =>
    s.orderid == id && indexes > 0 &&
    setIndexes( indexes - 1)
  )

  }

 
  // if (indexes > 0) {
  //   setIndexes(indexes===0 ? -200 : indexes - 1);
  // }
};

const nextBtn = (id) => {

  setclickpanelProfil(id)


  allFindResult.map((s, i) =>
        s.orderid == id && indexes< generateDate(today.month(), today.year()).length - 1 ?
        setIndexes(indexes <0 ? 0 : indexes+1) : ""
      )

  // if (indexes <  generateDate(today.month(), today.year()).length - 1) {
  //   setIndexes(indexes<0? 0 : indexes+1);
  // }
};











  return (

    <>
    <GlobalControllerLayout>

   <Grid container>

    <Grid xs={12} sm={12} md={1} lg={1} className="bg-white max-h-[198px]">
    </Grid>

    <Grid xs={12} sm={12} md={10} lg={10} className="data-index" >
    <div style={{display: "flex", alignItems: "flex-start"}}>
      <Grid container>

        <Grid xs={12} sm={12} md={8} lg={8}>

        <div style={{height: "auto",}} >

          <div className='bg-white' >

            <div className="p-4">

            <div>
            <Typography variant="subtitle1" className="text-[#3ee0a1]">
             {valueSearch } <span className="text-[#dddddd]" >için</span> 
            </Typography>
  
</div>

<div>

<Typography variant="h5" className="text-[#767699]">
       Toplam {doktorArrayLength} sonuç bulduk
            </Typography>

</div>




            </div>

            <hr />

            <div className="pt-4 pb-4" >

              <div className="mb-2">
              <Typography variant="subtitle2" className="text-[#dddddd]">
      Filtrele:
            </Typography>
           
              </div>
            
            
              <div>

                <Grid container gap={1}>
                  <Grid xs={4} sm={4} md={4} lg={4}>

                    
<form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">

      <div className=" text-center justify-between overflow-hidden flex w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#fcfffe]" placeholder="Search Mockups, Logos...">

<div>
  <span className="" style={{fontSize:"7px"}}>
  Online Görüşmeye Uygun
  </span>
</div>
      {/* <input placeholder="" type="search" className='text-sm w-9/12 focus:outline-0' id="default-search" /> */}

      <div className="switch-button">
                                        <label
                                          className="switch"
                                          value={onlineReview}
                                          onChange={()=>setonlineReview(!onlineReview)}
                                        >
                                          <input
                                            type="checkbox"
                                            checked={onlineReview}
                                          />
                                          <span className="slider round"></span>
                                        </label>{" "}
                                      </div>{" "}

        
      </div>
       
        
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
     */}
    
    </div>
</form>



                  </Grid>

                  <Grid xs={3.5} sm={3.5} md={3.5} lg={3.5} >

                  <form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">

      <div className=" text-center justify-between overflow-hidden flex w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#fcfffe]" placeholder="Search Mockups, Logos...">

      {/* <input   placeholder="Soru Sormaya Uygun" type="search" className='text-sm w-9/12 focus:outline-0' id="default-search" /> */}

      <div>
  <span className="" style={{fontSize:"7px"}}>
  Soru Sormaya Uygun
  </span>
</div>
      <div className="switch-button">
                                        <label
                                          className="switch"
                                          value={questionReview}
                                          onChange={()=>{setquestionReview(!questionReview)}}
                                        >
                                          <input
                                            type="checkbox"
                                            checked={questionReview}
                                          />
                                          <span className="slider round"></span>
                                        </label>{" "}
                                      </div>{" "}

        
      </div>
       
        
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
     */}
    
    </div>
</form>


</Grid>

<Grid xs={2.5} sm={2.5} md={2.5} lg={2.5} className="cursor-pointer">


<form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">

      <div className=" text-center justify-between overflow-hidden flex w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#fcfffe]" placeholder="Search Mockups, Logos...">

      {/* <input   placeholder="Soru Sormaya Uygun" type="search" className='text-sm w-9/12 focus:outline-0' id="default-search" /> */}

<div className="mb-auto mt-auto">
<IoSwapVerticalOutline/>

</div>

      <div>
  <span className="" style={{fontSize:"7px"}}>
  Sırala
  </span>
</div>

<div className="mb-auto mt-auto">
  <IoCaretDown/>
</div>
      

        
      </div>
       
        
      
    
    </div>
</form>

</Grid>

<Grid xs={1} sm={1} md={1} lg={1} className=" bg-[#1a9d99] cursor-pointer " style={{borderRadius:"50px"}}  onClick={()=> handleClickOpen()}>

<div className="mt-3">

  <div>
    <VscSettings className='m-auto text-white'/>
  </div>

</div>
</Grid>


                </Grid>

              </div>
            </div>



          </div>

{/* doctor profil panel */}


{
  allFindResult.map((v,i)=>{

   return(
    <div className="m-4" key={i}>

    <Grid container>

      <Grid xs={12} sm={12} md={12} lg={12} className="bg-white rounded-md ">
        <Grid container>

          <Grid xs={12} sm={12} md={6} lg={6} className="border-r-2 p-4">

            <div className="flex profilPart_logo" >
            <div>
              <img src="/images/profilmage.jpg" alt="profil" className='max-w-[70px] max-h-[70px] rounded-lg' />
            </div>


            <div className="ml-2 w-full">

            <div className="flex">

              <span className="">
              <Typography variant="subtitle1" className="text-[#0c0036]">
                <strong>
                {v.name}
                </strong>
          
    </Typography>
              </span>

             

              {
                v.verified && (

                 <div className="mt-auto mb-auto">

<span >
  <VscVerifiedFilled  className="text-[#1cbab5]"/>
</span>

                 </div>

                )
              }
             

            </div>

            <div>
            <Typography variant="body2" className="text-[#e9ded9]">
          {v.jobTitle}
    </Typography>

            </div>

           

            </div>
            </div>

             {/* star rate  */}

<div className="flex justify-end mr-2">
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
&nbsp;
<span >
<Typography variant="subtitle2" className="text-[#e9ded9] text-sm">
          {v.starRate} Görüş
    </Typography>
</span>

</div>

<div>

<Grid container>

<Grid xs={6} sm={6} md={6} lg={6}>

<div className='flex'>

<span>
<MdLocationPin className='text-[#1cbab5]'/>
</span>
&nbsp;
<span>
<Typography variant="subtitle2" className="text-[#dddddd]">
         {v.location}
    </Typography>
</span>


</div>

</Grid>

<Grid xs={6} sm={6} md={6} lg={6}>

<div className='flex'>

<span>
<HiVideoCamera className='text-[#1cbab5] text-sm'/>
</span>
&nbsp;
<span>
<Typography variant="subtitle2" className="text-[#dddddd] text-sm">

      {v.status}

  </Typography>
</span>


</div>


</Grid>

</Grid>


</div>

{/* description */}
<br/>
<div>

<span >
<Typography variant="body2" className="text-[#dddddd]">

    {v.description}

  </Typography>
</span>

</div>


<div className="mt-4 cursor-pointer">
<span >
<Typography variant="subtitle2" className="text-[#43eaa9]">
     Daha Fazla Gör
  </Typography>

</span>
</div>
          
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={6}>

            <Grid container style={{height: '100%', width: '100%'}} >

              <Grid xs={12} sm={12} md={12} lg={12}>


<Grid container style={{height: '100%', width: '100%'}}>

<Grid xs={1.5} sm={1.5} md={1.5} lg={1.5} style={{height: '100%', width: '100%'
, display: "flex", justifyContent: "center",  alignItems: "center" }}>


<div className=" gloabal-middle xs:hidden sm:hidden lg:block"  >

<div className={` middle_icon mb-1  ${videoTab ? 'bg-[#e8f8f7]' : ''}`} onClick={()=> {setlocationTab(false); setvideoTab(true);}} >

<span>
<HiVideoCamera className='text-[#1cbab5]'/>
</span>
</div>

<div className={ `middle_icon ${locationTab ? 'bg-[#e8f8f7]' : ''}`  } onClick={()=> {setlocationTab(true); setvideoTab(false);}}>
<span>
<MdLocationPin className='text-[#1cbab5]'/>
</span>
</div>
</div>
<div>


</div>

</Grid>

<Grid xs={10.5} sm={10.5} md={10.5} lg={10.5} className="mt-4">

  

{
  v.timeArray &&  v.timeArray[0] !== undefined  ? (

    <Grid container>

<Grid xs={2} sm={2} md={2} lg={2}>

  {

    indexes >= 0 && (

      
<div className="cursor-pointer text-center disableDiv" >
  <button style={{ background:"#edf8f4", borderRadius: "50px", color:"#00b7b3"}} onClick={()=>prevBtn(i)}>
<TiMediaPlayReverse/>
  </button>
</div>

    )


  }





</Grid>

<Grid xs={8} sm={8} md={8} lg={8}>


<div className="relative  overflow-hidden">
<table className="w-full text-sm text-left text-gray-500 ">
<thead className="text-xs text-gray-700  ">
    <tr >






    {generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (

                <th scope="col"  key={index}
                className="text-sm  text-center px-6 py-3" style={{ display: clickpanelProfil===i && indexes >= index  ? "none" : "" }}>
            
              <span>
                {date.toDate().toLocaleDateString('tr-TR', {weekday: 'short'})}
              </span>
           
          <div>
          <span>


{date.date()}

</span>
&nbsp;
<span>
 
{months[d.getMonth()]}
</span>
          </div>
          
             
          
          
                </th>

							);
						}
					)}

    

    </tr>
</thead>

<tbody>


  

{  

 v.isOpenMore ===false ?

 (

  generateDate(today.month(), today.year()).slice(0,5).map(
    ({ date, currentMonth, today }, index) => {

      return (

          
        <tr className="" key={index}  >
          {


v.timeArray.map((w,a)=>{

if(v.timeArray[index] !=="" && v.timeArray[index] !==undefined ){
return( 
<td className="px-6 py-4" key={a} >
<span className="spanToChange">{v.timeArray[index]}</span>
</td>
)
}
}

)                  
            
          }


</tr>
      )

    }
  )

 )
 

 :(

            generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
  
                return (
  
                    
                  <tr className="" key={index}  >
                    {
    
  
    v.timeArray.map((w,a)=>{
  
      if(v.timeArray[index] !=="" && v.timeArray[index] !==undefined ){
        return( 
          <td className="px-6 py-4" key={a} >
          <span className="spanToChange">{v.timeArray[index]}</span>
          </td>
        )
      }
    }
  
   )                  
                      
                    }
  
  
  </tr>
                )
  
              }
            )



          )
          
          
          }

          

  

          
            
        </tbody>
</table>
</div>

<div>



     

<div  onClick={()=>OpenMore(i)} className="mb-6">
<Typography variant="subtitle2" className="text-[#43eaa9] underline cursor-pointer">

  {

v.isOpenMore===false ? "Daha Fazla Saat Göster" : "Daha Az Saat Göster"

  }
     
  </Typography>
</div>
    


  

</div>




</Grid>

<Grid xs={2} sm={2} md={2} lg={2}>


<div className="cursor-pointer text-center " >
  <button style={{ background:"#edf8f4", borderRadius: "50px", color:"#00b7b3"}} onClick={()=>nextBtn(i)} >
<TiMediaPlay/>
  </button>
</div>      

</Grid>


</Grid>

  ) : v.timeArray && v.timeArray[0] === undefined ?(

    <Grid container style={{height: '100%'}}>

    <Grid xs={12} sm={12} md={12} lg={12} className="verticalCenter">

    <div className="text-center">

      <div>

<BiCalendarX className="w-[100%] text-[#00b7b3]"/>

      </div>

      <div>
      <Typography variant="subtitle2" className="text-[#1cbab5]">
Uygun Saat Bulunamadı
</Typography>
<Typography variant="subtitle2" className="text-[#1cbab5]">
Başka Tarih Seçiniz.
</Typography>
      </div>

     


    </div>


    </Grid>


  </Grid>


  ) : (

    <Grid container style={{height: '100%'}}>

      <Grid xs={12} sm={12} md={12} lg={12} className="verticalCenter">

      <div className="text-center">

        <div>

<BiCalendarX className="w-[100%] text-[#00b7b3]"/>

        </div>

        <div>
        <Typography variant="subtitle2" className="text-[#1cbab5]">
Takvim Mevcut Değil
  </Typography>
        </div>

        <div className="rounded-md text-[#00b7b3]  bg-[#e8f8f7] p-4 ">

<span className="">
  Online Randevu <br/> Talebinde Bulun
</span>

        </div>


      </div>


      </Grid>


    </Grid>
  )
}



</Grid>





</Grid>

              </Grid>
            </Grid>




</Grid>


        </Grid>
      </Grid>


    </Grid>
  </div>


   )

  })
}

          
          
          </div>
        </Grid>

        <Grid xs={12} sm={12} md={4} lg={4} className="" stye={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
        }}>

        <StickyBox className="p-1 sticky bg-white rounded-md"  offsetTop={20} offsetBottom={20} >

          <div>
           <Map/>
          </div>

        </StickyBox>
        </Grid>

      </Grid>


  
 
</div>

    </Grid>

    <Grid xs={12} sm={12} md={1} lg={1} className="bg-white max-h-[198px]">

    </Grid>

    <Grid xs={12} sm={12} md={12} lg={12}>

    <div className='w-full mx-auto py-16 px-8  text-gray-300' style={{background:"rgb(14, 46, 80)", borderTop:"3px solid #c2cac8", marginTop:"5rem",
    paddingTop: "1rem",
    fontSize: ".8125rem",
    color: "#FFFf",
    paddingBottom:"0"}}>


      <div>
        <h1 className='w-full text-3xl font-bold text-[#ffff]'>Graf-Studios</h1>
        <p className='py-4'>Software </p>
        <div className='flex justify-between  md:w-[10%] footersocial'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
           
        </div>
      </div>

     


      <div className='lg:col-span-2  justify-around mt-6 mb-10 hidden md:flex'>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400'>Product</h6>
        <ul>
         
          <li className='py-2 text-sm'>product1</li>


          <li className='py-2 text-sm'>Product2</li>

          <li className='py-2 text-sm'>Product3</li>

          <li className='py-2 text-sm'>Product4</li>

        
           
        </ul>
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400'>Hastalar için</h6>
        <ul>
          
         


<li className='py-2 text-sm'>hasta2</li>



<li className='py-2 text-sm'>Hasta3</li>



<li className='py-2 text-sm'>Hasat4</li>






        </ul>
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400'>Doktorlar için</h6>
        <ul>

         
          <li className='py-2 text-sm'>Doctor2</li>

          <li className='py-2 text-sm'>Doctor2</li>

         <li className='py-2 text-sm' >Doctor2</li>
         <li className='py-2 text-sm' >Doctor3</li>
          
        </ul>
    </div>

   


      </div>

      {/* Mobile footer */}

      <div className='lg:col-span-2 block justify-around mt-6 mb-10  md:hidden'>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400 flex justify-between' onClick={()=>setproductKontrol(!productKontrol)}><span>Product</span>
        <span>
          {
            productKontrol ? <VscChevronUp   /> :  <VscChevronDown   />
          }
          </span> </h6>

        {
          productKontrol && (

            <ul>

<li className='py-2 text-sm'>product1</li>


<li className='py-2 text-sm'>Product2</li>

<li className='py-2 text-sm'>Product3</li>

<li className='py-2 text-sm'>Product4</li>


          
          
         
        
           
        </ul>
          )
        }
       
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400 flex justify-between'  onClick={()=> setmarkalarPro(!markalarPro)}>
          <span> Hastalar için</span>
          <span>
          {
            markalarPro ? <VscChevronUp   /> :  <VscChevronDown   />
          }
          </span>
        </h6>

        {
          markalarPro && (
            <ul>
             

             <li className='py-2 text-sm'>hasta2</li>



<li className='py-2 text-sm'>Hasta3</li>



<li className='py-2 text-sm'>Hasat4</li>


        </ul>
          )

        }
       
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400 flex justify-between' onClick={()=>sethakkimizdaPro(!hakkimizdaPro)} >
          <span>Doctors</span>
          <span>
          {
            hakkimizdaPro ? <VscChevronUp   /> :  <VscChevronDown   />
          }
          </span>
        </h6>
       {
        hakkimizdaPro && (
          <ul>


<li className='py-2 text-sm'>Doctor2</li>

<li className='py-2 text-sm'>Doctor2</li>

<li className='py-2 text-sm' >Doctor2</li>
<li className='py-2 text-sm' >Doctor3</li>     
         
      </ul>
        )
       }
    </div>
      </div>
      

      <hr />
      <div className='text-center text-[#fff] p-5'>
        <span>
        © 2023 Graf-Studios
        </span>
      </div>

    </div>


    </Grid>

    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

        style={{zIndex:"99999"}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         İletişim
  
        </BootstrapDialogTitle>
        <DialogContent dividers>

        <div className='simple-form-contact'>

<form class="form">
  <h2>İletişime Geç</h2>
  <p type="Ad:"><input placeholder="Adınız"></input></p>
  <p type="Email:"><input placeholder="E-posta"></input></p>
  <p type="Soru:"><input placeholder="Sorunuz"></input></p>
  <button>Gönder</button>
  
</form>

    </div>
          
        </DialogContent>
        <DialogActions>


<Grid container>

</Grid>

        </DialogActions>
      </BootstrapDialog>




   </Grid>

    </GlobalControllerLayout>

    </>


  )
}
