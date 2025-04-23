import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

 export const Apoinmentcontext=createContext(null)

 const Apoinmentprovider = ({children}) => {
    const [appointments,setappointment]=useState(()=>{
        const storedappoinments=localStorage.getItem('appointments')
        return storedappoinments?JSON.parse(storedappoinments):[]
        
    
    })

    useEffect(()=>{
        const saved=localStorage.getItem('appointments')
        if(saved){
            setappointment(JSON.parse(saved))
        }
       
    },[])

    useEffect(()=>{
        localStorage.setItem('appointments',JSON.stringify(appointments))
    },[appointments])

    const addapoinments=(lawyers)=>{
        setappointment([...appointments,lawyers])
    }

    const removeapoinments=(id)=>{
        const filter =appointments.filter(item=>item.id !==id)
        setappointment(filter)
    }
    return (
       <Apoinmentcontext.Provider value={{appointments,addapoinments,removeapoinments}}>{children}</Apoinmentcontext.Provider>
    );
};

export default Apoinmentprovider;