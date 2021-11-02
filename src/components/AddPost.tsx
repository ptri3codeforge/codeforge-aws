import React from 'react'

const AddPost = () => {
    return (
        <div className="container mx-auto w-8/12 h-auto mb-6 ">
            <div className="mx-auto mt-2 w-1/3">
             <input
                type="text"
                id="title"
                className="border-4 rounded-lg border-yellow-default   border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                placeholder="Enter a post title..."
              />
            </div>
            
            <div className="mx-auto mt-2 w-full">
             <textarea
                id="description"
                className="border-4 text-wrap mb-2 border-yellow-default  rounded-lg w-3/4 h-32 w-full focus:outline-none text-sm h-10 flex items-center"
                placeholder="Describe your problem..."
              />
            </div>
        </div>
    )
}

export default AddPost
