import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const ManageDoctors = () => {
    const {data:doctors }= useQuery({
        queryKey :['doctors'],
        queryFn: async ()=>{
            try{
                const res = await fetch('http://localhost:5000/doctors',{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data= res.json();
                return data;

            }
            catch(error){

            }
        }
    })
    
    return (
        <div>
           <h2 className="text-3xl">Manage Doctors:{doctors?.length} </h2> 
           
        </div>
    );
};

export default ManageDoctors;