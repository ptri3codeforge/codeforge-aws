import React, {useState, useContext} from 'react'
import { BulletinData } from '../util/BulletinData';

const JobBoard = () => {
    // const [clicked, isClicked] = useState(false);
    // const [likeCount, setLikeCount] = useState(0)
    // const handleBoardClick = (e:any) => {
    //     e.preventDefault()
    //     isClicked(true);
    //     console.log('clicked')
    // }

    return (
            // <div>
            //     <div classNameName='mr-5 p-5 shadow-sm'>
            //     <h1 classNameName='block text-lg font-medium'>Subject</h1> 
            //     <div>
            //     <p classNameName='block m-0 text-m'>Description</p>
            //     </div>
            //     </div>
            // </div>
<div className="overflow-auto w-full h-4/6">
{BulletinData.map((el, i) => (
<div className={`flex bg-white-default
 cursor-pointer shadow-lg w-full hover:bg-mint-default`} 
key={i}
// onClick={() => isClicked(true)}
>
   <div className="flex items-start px-20 py-2  hover:text-white-default">
      <img className="w-12 h-12 rounded-full object-cover mt-1 mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
      <div className="">
         <div className="flex relative items-center justify-between ">
            <h2 className="text-med relative text-gray-900">{el.author}</h2>   
         </div>
         <small className="text-xs text-gray-700">22h ago</small>

         
         <p className= "mt-1 text-gray-700 font-medium text-2xl">
            {el.subject}
         </p>

            <div className="flex mr-2 text-gray-700 text-sm mr-8">
               <span>#React</span>
         </div>
      </div>
   </div>
</div>
))}
</div>
    )
}

export default JobBoard
