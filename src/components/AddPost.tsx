import React, {useState} from 'react'
import InputTag from './InputTag'
import { BiSend } from "react-icons/bi";

const AddPost = () => {

  const [tags, setTags] = useState(['Example Hashtag'])

  //@ts-ignore
  const onAddTag = tag => {
    setTags([...tags, tag])
  };

  //@ts-ignore
  const onDeleteTag = tag => {
    let remainingTags = tags.filter(t => {
      return t !== tag;
    });
    setTags([...remainingTags]);
  }

    return (
        <div className="container mx-auto w-8/12 h-auto mb-6 ">
            <h1 className="text-2xl text-yellow-default mb-2">
              Need some help? <br/>Let our community of seasoned engineers support you by asking a question below!
            </h1>
          <div className="flex text-darkBlue-default ">
            <div className="mx-auto mt-2 w-1/3">
             <input
                type="text"
                id="title"
                className="border-4 rounded-lg border-yellow-default   border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                placeholder="Enter a post title..."
              />
              <span>
                <div className="bg-white-cream text-center w-full border-4 mt-2 rounded-lg border-yellow-default">
                <InputTag
                        
                         onAddTag={onAddTag}
                         onDeleteTag={onDeleteTag}
                         defaultTags={tags}
                         placeHolder="enter up to 3 tags"
                />
                </div>
              </span>
              </div>
            </div>
            
            <div className="mx-auto mt-2 w-full">
             <textarea
                id="description"
                className="border-4 text-wrap mb-2 border-yellow-default  rounded-lg w-3/4 h-32 w-full focus:outline-none text-sm h-10 flex items-center"
                placeholder="Describe your problem..."
              />
            </div>
        
            <button className="text-yellow-default w-1/3 text-center bg-blue-light shadow-2xl rounded-lg border-yellow-default border-4 mb-4"   >
          <div className="flex flex-row ">
            <BiSend className="-mr-2 my-1 "/>
            <h1 className=" text-center mx-auto">SUBMIT</h1>
          </div>
         </button>
        </div>
    )
}

export default AddPost
