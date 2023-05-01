import React from 'react'
import "./css/WidgetContents.css"
import Expert from "../Images/Expert.jpeg"

function WidgetContents() {
  return (
    <div className='widget-contents'>
            <div className="widget-content">
                <img src={Expert} alt="" />
                <div className="widget-content-title">
                    <h5>Contact an expert</h5>
                    <p>Contct the best experts provided by us who can guide you through your difficulties</p>

                </div>
            </div>
    </div>
  )
}

export default WidgetContents
