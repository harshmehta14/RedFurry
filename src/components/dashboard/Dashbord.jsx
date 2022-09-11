import React from 'react'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom'

const Dashbord = () => {

    const naigate = useNavigate()

    const redirectrest = () =>{
            naigate("/restaurant")
    }
    const redirecttemp = () =>{
        naigate("/temples")
    }
    const redirectstn = () =>{
        naigate("/chargestation")
    }
    const redirectrspm = () =>{
        naigate("/supermarket")
    }

  return (
    <div className='Dashbord'>
        <div className='inner-div'>
            <div className="upper-para">
                <p className='paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos harum ex non, laudantium dolorum explicabo ullam rerum earum ipsum, numquam eveniet inventore id, sapiente adipisci asperiores placeat! Illo libero ea nostrum repellendus pariatur neque!</p>
            </div>
            <div className="middle-part">
                <div className='button-div' >
                <button  onClick={redirectrest} type="button" className="btn btn-secondary">Restaurant</button>
                </div>
                <div className='button-div' >
                <button onClick={redirecttemp} type="button" className="btn btn-secondary">Temples</button>
                </div>
                <div className='button-div' >
                <button onClick={redirectstn} type="button" className="btn btn-secondary">Chargestations</button>
                </div>
                <div className='button-div' >
                <button onClick={redirectrspm} type="button" className="btn btn-secondary">Supermarket</button>
                </div>
            </div>
            <div className="bottem-part">
                <p className='paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic tempore excepturi, inventore aliquid aliquam animi. Atque, debitis aspernatur. Cum voluptas voluptate asperiores maiores dignissimos in ipsum perspiciatis eveniet illo.</p>
            </div>
        </div>
    </div>
  )
}

export default Dashbord