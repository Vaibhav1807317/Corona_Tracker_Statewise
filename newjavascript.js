import React,{useState,useEffect} from 'react'
    const Statewise = ()=>{
        const getCovidData = async() =>{
            const res = await fetch('https://api.covid19india.org/state_district_wise.json');
            const actualData = await res.json();
            console.log(actualData.statewise);
            setData(actualData.statewise);
        }
        useEffect(() => {
            getCovidData();
            
        }, []);
               
        return(
               <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center"><span className="font-weight-bold">STATE</span>COVID</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                     <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>recovered</th>
                            <th>deaths</th>
                            <th>active</th>
                            <th>updated</th>
                            
                            
                        </tr>
                        
                        
                    </thead>
                    <tbody>
                  {  
                    data.map((curlElem, ind) => {
                       return(
                                          
                     <tr key={ind}>
                            <th>{curlElem.State}</th>
                            <td>{curlElem.Confirmed}</td>
                            <td>{curlElem.recovered}</td>
                            <td>{curlElem.deaths}</td>
                            <td>{curlElem.active}</td>
                            <td>{curlElem.updated}</td>
                        </tr>
                        )            
        
        })
        }
                    
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>recovered</th>
                            <th>deaths</th>
                            <th>active</th>
                            <th>updated</th>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>Confirmed</td>
                            <td>recovered</td>
                            <td>deaths</td>
                            <td>active</td>
                            <td>updated</td>
                        </tr>
                        
                        
                    </tbody>
                    <tr>
                        
                        
                        
                        
                    </tr>
                    
                </table>
                
            </div>
            
        </div>
             
    )
    }


