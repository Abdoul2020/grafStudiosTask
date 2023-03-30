import React from 'react'
import { Grid } from "@mui/material";
import { AiFillCaretDown } from 'react-icons/ai';
import {VscArrowSmallRight} from "react-icons/vsc";





const Header = () => {
  return (

    <div className="bg-white p-8 " style={{borderBottom: "1px solid #dddddd"}}>
<Grid container>

  <Grid xs={12} sm={12} md={8} lg={8} >

    <Grid container>
      
      <Grid xs={12} sm={12} md={12} lg={12} className="navbar-firstRow" gap={2}>

        <div>

          <img src="/images/grafStudioLogo2.png" alt="Graf-Studios" />

        </div>

        

        <div className="searchInput">
        <form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">


      


    <button type="submit" className="bottom-1 pt-1 left-2.5 bg-[#e5f8f6]  font-medium rounded-lg text-sm px-4 py-2 text-gray-900 absolute left-0 flex items-center pl-3">
          <span>Konum seç</span>
          &nbsp;&nbsp;
          <span>
            <AiFillCaretDown/>
          </span>
      
        </button>

        <div className="block w-full p-2.5 pl-10 text-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#ffffff]    ">
        <input type="search" className='text-sm w-3/6 focus:outline-0' id="default-search"  placeholder="Doktor veya branş arayın..." required />
        </div>

        
        <button type="submit" className="text-white absolute pt-1 flex right-2.5 bottom-1 bg-[#3ee0a1]     font-medium rounded-lg text-sm px-4 py-2 ">
          <span>ara</span>
          &nbsp;&nbsp;
        <span className="mt-auto mb-auto">
        <svg aria-hidden="true" className="w-5 h-5 text-[#eefcf7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

        </span>
        </button>
    </div>
</form>

        </div>

        

      </Grid>

    </Grid>


  </Grid>

  <Grid  md={4} lg={4} >

    <Grid container>
      <Grid xs={12} sm={12} md={12} lg={12} className="flex justify-end mt-auto mb-auto" gap={2} >

        <div   className="text-white  flex  bottom-2.5 bg-[#3ee0a1]     font-medium rounded-lg text-sm px-4 py-2 p-4 ">
        <span>
          Hemen Kaydol
        </span>
        </div>

        <div className="text-[#10b6b1] border border-[#3ee0a1] flex   bottom-2.5  font-medium rounded-lg text-sm px-4 py-2 p-4" >
        <span>
          Giriş Yap
        </span>
        &nbsp;&nbsp;
        <span className='mt-auto mb-auto'>

          <VscArrowSmallRight/>

        </span>
        </div>

      </Grid>



    </Grid>


  </Grid>

</Grid>
    </div>
  )
}

export default Header
