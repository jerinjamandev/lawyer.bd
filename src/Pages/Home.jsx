import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Components/Banner';
import Lawyerdata from '../Components/Lawyerdata';
import Servicesanimation from '../Components/Servicesanimation';

const Home = () => {
    const [lawyers,setlawyers]=useState([])
    const [loading,setloading]=useState(true)

    useEffect(() => {
        fetch('lawyerdata.json', {
            method: 'GET',
            cache: 'no-cache'
        })
            .then(res => res.json())
            .then(data => { setlawyers(data), setloading(false) })
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    if(loading){
        return(
        <div className='flex justify-center items-center min-h-screen'><span className="loading loading-bars loading-lg"></span> </div>)
    }
    return (
        <div>
       
           <Banner></Banner>
           <Lawyerdata lawyers={lawyers}></Lawyerdata>
           <Servicesanimation></Servicesanimation>
           
        </div>
    );
};

export default Home;