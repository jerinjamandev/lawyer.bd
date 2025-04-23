import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import {useInView} from "react-intersection-observer"

const Servicesanimation = () => {
    const {ref,inView}=useInView({triggerOnce:false,threshold:0.5})
    const [key,setkey]=useState(0)
    useEffect(()=>{
        if(inView){
            setkey(prev=>prev+1)
        }
    },[inView])
    return (
        <div className='my-16'ref={ref}>
            <h1 className='text-center font-bold text-4xl'>We Provide Best Law Services</h1>
            <h3 className='text-center py-4'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </h3>

            <div className='grid lg:grid-cols-4 gap-4 px-10 my-10 grid-cols-1'>
                <div className="card bg-gray-200 shadow-sm px-4 py-4">
                    <div>
                        <img
                            src="https://i.ibb.co.com/zVh8F4cs/success-doctor.png"
                            alt="Shoes" />
                    </div>
                    <div className="py-3">
                        <h2 className="text-3xl font-bold"><CountUp key={key + '-1'} end={199} duration={2} />+</h2>
                        <p>Total Lawyer</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>


                <div className="card bg-gray-200 shadow-sm px-4 py-4">
                    <div>
                        <img
                            src="https://i.ibb.co.com/4wtfJfV8/success-review.png"
                            alt="Shoes" />
                    </div>
                    <div className="py-3">
                        <h2 className="text-3xl font-bold"><CountUp key={key + '-1'} end={467} duration={2} />+</h2>
                        <p>Total Lawyer</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>


                <div className="card bg-gray-200 shadow-sm px-4 py-4">
                    <div>
                        <img
                            src="https://i.ibb.co.com/W4DTYpY8/success-patients.png"
                            alt="Shoes" />
                    </div>
                    <div className="py-3">
                        <h2 className="text-3xl font-bold"><CountUp key={key + '-1'} end={1020} duration={2} />+</h2>
                        <p>Total Lawyer</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>


                <div className="card bg-gray-200 shadow-sm px-4 py-4">
                    <div>
                        <img
                            src="https://i.ibb.co.com/DDvFkZTg/success-staffs.png"
                            alt="Shoes" />
                    </div>
                    <div className="py-3">
                        <h2 className="text-3xl font-bold"><CountUp key={key + '-1'} end={300} duration={2} />+</h2>
                        <p>Total Lawyer</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicesanimation;