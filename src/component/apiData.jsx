

import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Summary from "./summary"

const ApiData = () => {
    const [users, setUsers] = useState([])

    const fetchData = () => {
        axios.get("https://api.tvmaze.com/search/shows?q=all").then(response => {
            setUsers(response.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div className=" flex flex-row flex-wrap justify-around bg-teal-600">
            {
                users.map((data) => {
                    return (<div className=" m-4 h-1/2 bg-slate-700 w-1/6 rounded-3xl ">
                        <img className=" w-full" src={data.show.image.medium} alt="here" />
                        <h3 className=" text-xl font-serif mx-2 text-white">{data.show.name}</h3>
                        <h3 className="text-lg font-serif mx-2 text-white">{data.show.language}</h3>
                       <button className="px-6 py-2 text-lg font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto"><Link to="/summary" state={data.show.summary}>summary</Link></button> 
                    </div>)

                })}
        </div>
    )
}

export default ApiData


{/* <a href="#_" class="">
Button Text
</a> */}