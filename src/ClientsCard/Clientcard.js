import React from 'react'
import "./Clientcard.css"
import logo from '../Assets/logo.png'

const Clientcard = () => {

    const data = [{
        img:"https://squareboat.com/storage/851/MicrosoftTeams-image-%2815%29.png",
        name:"Dr.Reddy's"
    },
    {
        img:"https://squareboat.com/storage/850/MicrosoftTeams-image-%2817%29.png",
        name:"DAMAC"
    },
    {
        img:"https://squareboat.com/storage/890/Chegg_logo.svg",
        name:"Chegg"
    },
    {
        img:"https://squareboat.com/storage/3/jubilant.svg",
        // name:"Jublient"
    },
    {
        img:"https://squareboat.com/storage/30/paisabazaar.svg",
      
    },
    {
        img:"https://squareboat.com/storage/131/logo-4d2d81aefcf296bc100d9edc114c2ea5.png",
       
    },
    {
        img:"https://squareboat.com/storage/136/Elevation_Primary_logo_RGB%402x.png",
        
    },
    
    {
        img:"https://squareboat.com/storage/4/hudle.svg",
        
    },
    
];
  return (
   <>
    {/* <div className='clientcardwrap'> */}

     
           <div className='clientimgcard'>
            {
                  data.map( (e)=>{
                    return(
                        <div  className='actualcards'>
                            <img src={e.img} />
                            <h4>{e.name}</h4>

                        </div>

                    )
                  })
            }
           </div>
       
        
     
       
    {/* </div> */}
   </>
  )
}

export default Clientcard
