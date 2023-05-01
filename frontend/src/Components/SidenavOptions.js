import React from 'react'
import "./css/SidenavOptions.css"
import Dyslexia from "../Images/Dyslexia.avif"
import Autism from "../Images/Autism.jpeg"
import Dyscalculia from "../Images/Dyscalculia.jpg"
import Dysgraphia from "../Images/Dysgraphia.jpeg"
import APD from "../Images/APD.jpeg"
import ADHD from "../Images/ADHD.jpeg"
import { Add } from '@mui/icons-material'

function SidenavOptions() {
  return (
    <div className='SidenavOptions'>
        <div className="SidenavOption">
            <img src={Dyslexia} alt="" />
            <p>Dyslexia</p>
        </div>
        <div className="SidenavOption">
            <img src={Autism} alt="" />
            <p>Autism</p>
        </div>
        <div className="SidenavOption">
            <img src={Dyscalculia} alt="" />
            <p>Dyscalculia</p>
        </div>
        <div className="SidenavOption">
            <img src={Dysgraphia} alt="" />
            <p>Dysgraphia</p>
        </div>
        <div className="SidenavOption">
            <img src={APD} alt="" />
            <p>Auditory Processing Disorder(APD)</p>
        </div>
        <div className="SidenavOption">
            <img src={ADHD} alt="" />
            <p>ADHD</p>
        </div>
        <div className="SidenavOption">
            <Add/>
            <p>Discover Spaces</p>
        </div>
      
    </div>
  )
}

export default SidenavOptions
