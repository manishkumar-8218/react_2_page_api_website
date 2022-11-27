import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Summary = (id) => {
    const location = useLocation();
    console.log(location)
    
    const summary=location.state;
    
    return (
        <div className=" h-screen flex items-center justify-center bg-teal-600">
           <div className=" w-1/2 bg-slate-700  p-4 rounded-md shadow-2xl shadow-orange-500 text-white font-normal font-serif">{summary}</div>
        </div>
    )
}

export default Summary;
