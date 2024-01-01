import React, { useEffect, useState } from 'react';
import './Covid.css'

const Covid = () => {

    const [covidData, setCovidData] = useState([]);


     
    const getCovidData = async () => {
        try{
            const response =await fetch('https://data.covid19india.org/data.json') 
    //  fetch will return promise that need to handle
    // it means i future data will have two cond either rejected or fulfilled
            const realData= await response.json();
            console.log(realData.statewise[0]);
            setCovidData(realData.statewise[0]);
        }catch(err){
            console.log(err);
        }
     }

    useEffect(() => {
       getCovidData();
    }, []);

  return (
    <>
    <section>
    <h2 className="heading">🖊️ Indian COVID-19 Report</h2>
      <ul>
         <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>OUR</span> COUNTRY  </p>
                    <p className="card__total card__small"> INDIA </p>
                </div>
            </div>        
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>Total</span> Recoverd  </p>
                    <p className="card__total card__small"> {covidData.recovered} </p>
                </div>
            </div>        
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>Total</span> Confirmed  </p>
                    <p className="card__total card__small"> {covidData.confirmed} </p>
                </div>
            </div>        
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>Total</span> Deaths  </p>
                    <p className="card__total card__small"> {covidData.deaths} </p>
                </div>
            </div>        
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>Total</span> Active  </p>
                    <p className="card__total card__small"> {covidData.active} </p>
                </div>
            </div>        
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>Last</span> Update  </p>
                    <p className="card__total card__small"> {covidData.lastupdatedtime} </p>
                </div>
            </div>        
        </li>
        
      </ul>
      </section>
    </>
  )
}

export default Covid
