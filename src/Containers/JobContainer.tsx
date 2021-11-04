import React from "react";
import JobBoard from "../Components/JobBoard";
import SearchBar from "../Components/SearchBar";

const JobContainer = () => {

    return (
        <div className='flex flex-col h-full'>
         
                <div className='row-start-1 bg-white row-start-1 row-span-{3} relative rounded-r-3xl'>
            <h1 className="flex items-center justify-center text-xl font-bold h-20 bg-mint-default">JOB LISTINGS </h1>
            
                <div className="flex items-center justify-center h-20 w-full bg-white">
                 <SearchBar />
                </div>

            {/* <div className='overflow-y-scroll flex items-center text-lg font-medium sticky top-0 bg-white mr-5 w-full'></div> */}
            <JobBoard />
            </div>
        </div>
        
    )
};

export default JobContainer;