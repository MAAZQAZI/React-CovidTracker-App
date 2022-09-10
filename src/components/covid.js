import React, { useEffect,useState } from 'react'
import './covid.css'
export const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {

        try {
            const response = await fetch('https://data.covid19india.org/data.json');
            
            const data = await response.json();
            console.log(data.statewise[0]);
            setData(data.statewise[0]);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getCovidData();
    },[]);
  return (
    
    <div className='container'>

    
     <ul className='ul'>
<li className='card'>
    <div className='card_main'>
            <div className='card_inner'>
                <p className='card_total'><span>Our </span>Country</p>
                    <p className='card_total card_small'>India</p>

            </div>

    </div>

</li>
<li className='card'>
    <div className='card_main'>
            <div className='card_inner'>
                <p className='card_total'><span>Total </span>Recoverd</p>
                    <p className='card_total card_small'>{data.recovered}</p>

            </div>

    </div>

</li>
<li className='card'>
    <div className='card_main'>
            <div className='card_inner'>
                <p className='card_total'><span>Total </span>Confirmed</p>
                    <p className='card_total card_small'>{data.confirmed}</p>

            </div>

    </div>

</li>



     </ul>

     <ul className='ul'>
     <li className='card'>
         <div className='card_main'>
                 <div className='card_inner'>
                     <p className='card_total'><span>Total </span>Deaths  </p>
                         <p className='card_total card_small'>{data.deaths}</p>
     
                 </div>
     
         </div>
     
     </li>
     <li className='card'>
         <div className='card_main'>
                 <div className='card_inner'>
                     <p className='card_total'><span>Total </span>Active  </p>
                         <p className='card_total card_small'>{data.active}</p>
     
                 </div>
     
         </div>
     
     </li>
     <li className='card'>
         <div className='card_main'>
                 <div className='card_inner'>
                     <p className='card_total'><span>Last </span>Updated  </p>
                         <p className='card_total card_small'>{data.lastupdatedtime}</p>
     
                 </div>
     
         </div>
     
     </li>
     
     
     
          </ul>
    </div>
  )
}

export default Covid
