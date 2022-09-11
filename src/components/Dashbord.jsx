import React from 'react'
import "./dashboard.css"

const Dashbord = () => {
  return (
    <div className='Dashbord'>
        <div className='inner-div'>
            <div className="upper-para">
                <p className='paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos harum ex non, laudantium dolorum explicabo ullam rerum earum ipsum, numquam eveniet inventore id, sapiente adipisci asperiores placeat! Illo libero ea nostrum repellendus pariatur neque!</p>
            </div>
            <div className="middle-part">
                <div className='button-div' >
                <button type="button" className="btn btn-secondary">Option 1</button>
                </div>
                <div className='button-div' >
                <button type="button" className="btn btn-secondary">Option 2</button>
                </div>
                <div className='button-div' >
                <button type="button" className="btn btn-secondary">Option 3</button>
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