import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Lawyerdata = ({ lawyers }) => {

    const [veiw,setveiw]=useState(6)


    return (
        <div className='lg:px-10 px-6 my-16'>
            <h2 className='text-center font-bold text-4xl'>Our Best Lawyers</h2>
            <p className='text-center py-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 my-16 '>
                {
                    lawyers?.slice(0,veiw).map(lawyer => (
                        <div className="card card-side bg-base-100 shadow-sm gap-10 px-5 py-4 flex lg:flex-row flex-col items-center">
                            <div>
                                <img className='w-[150px] h-[180px] rounded-lg'
                                    src={lawyer.Image}
                                    alt="Movie" />
                            </div>
                            <div className="card-body">
                                <div className='flex items-center gap-3 px-5 lg:flex-row flex-col'>
                                    <button className="text-green-400 bg-green-100 px-2 py-1 rounded-lg">{lawyer.Available}</button>
                                    <button className="text-blue-400 bg-blue-100 px-2 py-1 rounded-lg">{lawyer.Experience}</button>

                                </div>
                                <h2 className="card-title font-bold px-5">{lawyer.Name}</h2>
                                <p className='px-5'>{lawyer.Speciality}</p>
                                <p className='px-5'>{lawyer.LicenseNumber}</p>
                                <div className="">

                                    <Link to={`/lawyer/${lawyer.LicenseNumber}`}>                                   
                                    <button className="btn border-blue-300 w-[90%] rounded-full text-blue-400 font-bold my-4">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


                <div className='flex flex-col items-center'>  
                {
                    veiw===6&& <button onClick={()=>setveiw(veiw+6)} className="btn bg-[#0EA106] text-white rounded-full">Show All Lawyer</button>

                } 
                </div>
        </div>
    );
};

export default Lawyerdata;