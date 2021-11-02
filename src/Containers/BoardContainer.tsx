import React from "react";
import BulletinBoard from "../Components/BulletinBoard";
import SearchBar from "../Components/SearchBar";

const BoardContainer = () => {

    return (
        <div className='flex flex-col h-full rounded-r-3xl bg-yellow-default rounded-r-3xl h-full'>
         
            <div className='row-start-1 row-start-1 row-span-{3}  relative rounded-r-3xl'>
                 <h1 className="flex items-center bg-yellow-default justify-center text-xl font-bold h-20 shadow-md ">BULLETIN BOARD </h1>
            
                <div className="flex items-center justify-center h-20 w-full bg-white-default">
                 <SearchBar />
                </div>

            {/* <div className='overflow-y-scroll flex items-center text-lg font-medium sticky top-0 bg-white mr-5 w-full'></div> */}
            <BulletinBoard />
            </div>
        </div>
        
    )
};

export default BoardContainer;