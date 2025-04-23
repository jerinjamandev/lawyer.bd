import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Bookedrechart from '../Components/Bookedrechart';
import { Apoinmentcontext } from '../provider/Apoinmentprovider';
import { ToastContainer, toast } from 'react-toastify';




const MyBookings = () => {
    const {appointments,removeapoinments}=useContext(Apoinmentcontext)
    console.log(appointments);
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setloading (false)
        }, 1000);
    },[])

    if(loading){
        return(
        <div className='flex justify-center items-center min-h-screen'><span className="loading loading-bars loading-lg"></span> </div>)
    }
const handelRemove=(id)=>{
    removeapoinments(id)
    toast.error ('remove-apoinment')
}
    if(appointments.length===0){
        return (
            <div className='min-h-screen flex flex-col items-center justify-center'>
             <h2 className='lg:text-3xl text-xl font-bold text-center'>You Have Not Booked Any Appointment Yet!</h2>
             <Link to='/'><button className='btn bg-blue-500 text-white mt-5 rounded-2xl'>Book An Appointment</button></Link>
            </div>
          )
    }
    return (
        <div>
         <Bookedrechart appointments={appointments} ></Bookedrechart>
            
          <div className='my-18'>
          <h1 className='text-center font-bold text-3xl'>My Today Appointments</h1>
            <p className='text-center mt-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
        </div>


        <div>
            {
                appointments.map(appointment=>(
                    <div className='border border-gray-300 px-7 py-6 my-5 mx-auto w-[95%] rounded-2xl '>


                    <div className='flex lg:flex-row flex-col justify-between items-center'>
      
                      <div>
                        <p className='py-2 font-bold'>{appointment.name}</p>
                        <p>{appointment.Speciality}</p>
                      </div>
      
                      <div>
                        <p>Appointment Fee :  {appointment.Fee} Taka</p>
                      </div>
      
                    </div>
                    <hr className='my-2' />
      
                    <button onClick={()=>handelRemove(appointment.id)} className='btn w-full mt-6 text-red-500 border-red-500 rounded-full'>Cancel Appointment</button>
      
      
      
                  </div>
                ))
            }
        </div>

        </div>
    );
};

export default MyBookings;