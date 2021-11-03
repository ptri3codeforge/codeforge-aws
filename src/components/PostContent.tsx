import React from 'react'
import BulletinBoard from './BulletinBoard';
import { tempPostInfo } from './BulletinBoard';

const PostContent = () => {
    
    return (
        <div className="mx-auto w-ful h-full bg-darkBlue-default lex items-center justify-center text-xl font-bold shadow-md border-l-8 border-blue-default">
            <div className='flex items-center bg-yellow-default justify-center h-20 relative  bg-yellow-default'>
                <h1>POST CONTENT </h1>
            </div>

            {/* <div className="md:flex-shrink-0">
                <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" />
            </div> */}
        <div className=" bg-white-default border-8 border-yellow-default rounded-3xl m-8">
            <div className="px-4 py-2 m-8 " >
                <h1 className="font-bold text-3xl text-gray-800 tracking-normal">
            {/* <img className="w-12 h-12 rounded-full object-cover mt-1 mr-4 shadow inline-block" src="https://        images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&     auto=format&fit=crop&w=500&q=60" alt="avatar" /> */}
                    {/* {tempPostInfo.subject || 'subject'} */}
                    TITLE/SUBJECT
                </h1>
                <p className="text-sm text-blue-default ml-5 mb-5 mt-2">
                    {/* Posted by {tempPostInfo.author || 'author'} */}
                    POSTED BY AUTHOR NAME
                </p>
                 </div>
            <div>
                <p>
                {/* {tempPostInfo.description || 'description'} */}
                DESCRIPTION OF PROBLEM
                </p>
            </div>
            <button className="mb-5 mt-8 bg-white hover:bg-blue-default hover:text-white-default hover:border-opacity-100 text-gray-800 text-sm font-semibold py-2 px-4 border border-gray-400 rounded shadow">Message</button>
        </div>

        </div>
    )
}

export default PostContent