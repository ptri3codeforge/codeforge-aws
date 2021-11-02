import React, {useState, useContext} from 'react'
import { BulletinData } from '../util/BulletinData'

const BulletinBoard = () => {
    const [clicked, isClicked] = useState(false);
    const [likeCount, setLikeCount] = useState(0)
    const handleBoardClick = (e:any) => {
        e.preventDefault()
        isClicked(true);
        console.log('clicked')
    }

    return (

      <div className="w-full h-4/5 bg-yellow-default rounded-lg m-8 ">
      
      <div className="rounded-lg bg-yellow-default flex flex-wrap content-evenly ">
      {BulletinData.map((el, i) => (
         <div className={`flex ${clicked ? `bg-yellow-default text-white-default` : `bg-white-default`}  border-8 m-2 border-white-default rounded-lg  cursor-pointer shadow-lg w-full hover:bg-white-default`} 
         key={i}
         // onClick={() => isClicked(true)}
         >
         <div className="flex  rounded-3xl hover:bg-blue-light bg-white-cream w-full px-20 py-2  hover:text-white-default">
            <img className="w-12 h-12 rounded-full object-cover mt-1 mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
            
            <div className=" w-full">
               <div className="flex relative">
                  <h2 className="text-med">{el.author}</h2>   
               </div>
               <small className="text-xs ">
                  {Math.floor(Math.floor((Date.now() - el.posttime) / 1000) / 60) > 90 ? 
                  `${Math.floor(Math.floor(Math.floor((Date.now() - el.posttime) / 1000) / 60)) / 60}h ago`
                  : `${Math.floor(Math.floor((Date.now() - el.posttime) / 1000) / 60)}m ago`
               }
               </small>
      

               <p className= " mt-1 font-medium text-2xl text-center ">
                  {el.subject}
                  
               </p>
      
               <div className= "flex justify-between  mt-2 mb-2 flex items-center">
                  <div className="flex mr-10 text-gray-700 text-sm">
                     
                     <span>{el.resolved === true? <h1><span className="text-resolved-default">◉ </span>Resolved</h1> : <h1><span className="text-open-default">◉ </span>Open</h1>}</span>
                  </div>
                  <div className="flex mr-2 text-gray-700 text-sm mr-8">
                     <span className="text-lg">#{el.hashtag[0]}</span>
                  </div>
               </div>
            </div>
            
         </div>
         
      </div>
      ))}
         </div>
      </div>
    )
}

export default BulletinBoard
