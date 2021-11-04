import React from "react";
import BulletinBoard from "../Components/BulletinBoard";
import SearchBar from "../Components/SearchBar";
import AddPost from "../Components/AddPost";
const BoardContainer = () => {

    return (
        <div className='flex flex-col h-full bg-darkBlue-default rounded-r-3xl h-full'>
         
            <div className='row-start-1 row-start-1 row-span-{3}  relative rounded-r-3xl'>
                 <h1 className="flex items-center bg-yellow-default justify-center text-xl font-bold h-20 shadow-md ">
                     BULLETIN BOARD
                </h1>
            
                <div className="flex items-center justify-center h-20 w-full bg-white-default border rounded-tr-3xl">
                 <SearchBar />
                </div>
            <div className="flex items-center justify-center w-full">
            <BulletinBoard />
            </div>
            <AddPost />
            </div>
        </div>
        
    )
};

export default BoardContainer;