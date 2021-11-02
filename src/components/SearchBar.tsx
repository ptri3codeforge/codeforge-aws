import React from 'react'
import  { BiSearch } from "react-icons/bi";

const SearchBar = () => {

    return (
    <div className="w-3/4 ">
        <div className="bg-white-default flex items-center rounded-full outline-yellow">
            <input className="rounded-l-full w-full py-4 px-6 text-gray-700 focus:outline-none leading-tight" id="search" type="text" placeholder="Search" />
                <div className="p-4">

            <button className="bg-blue-500 text-white rounded-full p-2 focus:outline-none hover:bg-blue-400 w-12 h-6 flex items-center justify-center">
                <BiSearch />
            </button>
            </div>
         </div>
    </div>
    )
}

export default SearchBar
