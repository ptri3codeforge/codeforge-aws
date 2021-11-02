import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateBio } from '../redux/reducers/user';
import {BiMap, BiMessageSquareDots, BiWrench, BiEdit} from 'react-icons/bi'




const ProfilePage = () => {
      //@ts-ignore: Unreachable code error
 const { userName, userBio, firstName, lastName, city, skillLevel, role, openTo, skill1, skill2, skill3, about, highlightLink1, highlightTitle1, highlightLink2, highlightTitle2, highlightLink3, highlightTitle3, highlightLink4, highlightTitle4, ghLink, liLink, twLink  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

 const [bio, setbio] = useState('');
 const [edit, setEdit] = useState(false);

 // Toggles state for editing individual highlight sections 
 const [editHighlight1, setHighlight1] = useState(false);
 const [editHighlight2, setHighlight2] = useState(false);
 const [editHighlight3, setHighlight3] = useState(false);
 const [editHighlight4, setHighlight4] = useState(false);

 console.log(`Edit is ${edit}`);

 const myRef = React.useRef(null)

  //@ts-ignore: Unreachable code error
  //small algo to scroll to top, not functional
 //const scrollUp = () => myRef.current.scrollIntoView()
 //if(edit === true) scrollUp()

    return (
        <div className="h-full">
        
            {/* <h1>User name:{userName}</h1>
             <h1>User Bio:{userBio}</h1>
     <form>
        <label>
          Update Bio:
          <textarea
            value={bio}
            onChange={(e) => {
              setbio(e.target.value);
            }}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(bio);
            dispatch(updateBio(bio));
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setbio('');
          }}
        >
          Clear
        </button>
      </form> */}


  <section ref={myRef}  className="relative py-16 ">
    <div className="container mx-auto px-4">
      <div className=" relative flex flex-col min-w-0 break-words bg-white-cream w-full mb-6 shadow-xl rounded-lg mt-2">
        <div className="px-6">
          <div className="flex justify-center">
                <img src="https://rediqless.s3.us-east-2.amazonaws.com/1629337049016.jpeg" className="shadow-xl rounded-full h-40 align-middle border-8 border-blue-light absolute -m-16  lg:-ml-16 max-w-150-px" />
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            </div>
          </div>
          
          <div className="text-center m-24 mb-10 ">
            
            <div  className="inline-block">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-darkBlue-default mb-2">
            {/* {edit === true ? <span className="inline-flex h-12 w-12 mt-2 -mr-6 text-xl">
              <BiWrench />
              </span> : ''} */}


              {edit === true ?  
              <form>
                <input
                 defaultValue={firstName}
                  className="border text-center border-blue-light bg-yellow-default rounded-lg h-8"
                  // onChange={(e) => {
                  // setbio(e.target.value);
                  //  }}
                />
              </form> 
              
              : `${firstName} `}
              {edit === true ?  
              <form>
                <input
                 defaultValue={lastName}
                  className="border text-center border-blue-light bg-yellow-default rounded-lg h-8"
                  // onChange={(e) => {
                  // setbio(e.target.value);
                  //  }}
                />
              </form> 
              
              : `${lastName}`}
              

              
            </h3>
            </div>
            {edit === true ? 
              <BiMap className="text-blue-default mr-auto ml-auto flex flex-row justify-center h-12 w-12 mt-2 "/>
               : ''}

            

            <div className="text-sm leading-normal font-bold uppercase h-10">
              <i className="mr-auto text-lg text-darkBlue-default"></i>
              {edit === true ? '' :  <span className="inline-flex h-12 w-12 mt-2 -mr-6 text-xl">
              <BiMap />
              </span>}
             
              {edit === true ?  
              <form>
                <input
                 defaultValue={city}
                  className="border border-blue-light bg-yellow-default rounded-lg h-8"
                  // onChange={(e) => {
                  // setbio(e.target.value);
                  //  }}
                />
              </form> 
              
              : `${city}`}

             </div>

            <div className="flex flex-row justify-center text-left"> 
              <div className="mb-2 px-8 text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold text-xl text-blue-default">Skill Level:</h1>
              <i className="text-left mr-0 text-lg text-blueGray-400"></i>
              {edit === true ?  
              <form>
                <input
                 defaultValue={skillLevel}
                  className="border border-blue-light bg-yellow-default rounded-lg h-8"
                  // onChange={(e) => {
                  // setbio(e.target.value);
                  //  }}
                />
              </form> 
              
              : `${skillLevel}`}
              </div>
            <div className="mb-2 px-8  text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold text-xl text-blue-default">Current Role:</h1>
              <i className=" mr-0 text-lg text-blueGray-400"></i>
              {edit === true ?  
              <form>
                <input
                 defaultValue={role}
                  className="border border-blue-light bg-yellow-default rounded-lg h-8"
                  // onChange={(e) => {
                  // setbio(e.target.value);
                  //  }}
                />
              </form> 
              
              : `${role}`}
              
            </div>
            <div className="mb-2 px-8  text-blueGray-600 mt-10 text-center">
              <h1 className="font-bold text-xl text-blue-default">Open To:</h1>
              <i className="text-lg mr-0 text-blueGray-400"></i>
              {edit === true ?  
              <form>
                <input
                 defaultValue={openTo}
                  className="border border-blue-light bg-yellow-default rounded-lg h-8"
                  // onChange={(e) => {
                  // setbio(e.target.value);
                  //  }}
                />
              </form> 
              
              : `${openTo}`}
            </div>
          </div>
          </div>

          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default">Top Technical Skills</h1>
                <p className="mb-0 text-lg leading-relaxed text-blueGray-700">
                  <ul>
                  {edit === true ?  
                    <form>
                      <input
                       defaultValue={skill1}
                        className="border mb-2 border-blue-light bg-yellow-default rounded-lg h-8"
                        // onChange={(e) => {
                        // setbio(e.target.value);
                        //  }}
                      />
                    </form> 

                    : `${skill1}`}
                    </ul>
                  <ul>
                    {edit === true ?  
                    <form>
                      <input
                       defaultValue={skill2}
                        className="border mb-2 border-blue-light bg-yellow-default rounded-lg h-8"
                        // onChange={(e) => {
                        // setbio(e.target.value);
                        //  }}
                      />
                    </form> 

                    : `${skill2}`}</ul>
                  <ul>
                    {edit === true ?  
                      <form>
                        <input
                         defaultValue={skill3}
                          className="border mb-2 border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                      </form> 
              
                      : `${skill3}`}
                    </ul>
                </p>     
              </div>
            </div>
          </div>


          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default">About</h1>
                {edit === true ?  
                      <form>
                        <textarea
                         defaultValue={about}
                          className="border text-wrap mb-2 border-blue-light bg-yellow-default rounded-lg w-3/4 h-32"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                      </form> 
              
                      : <p className="mb-4 text-lg leading-relaxed text-darkBlue-default">
                      {about}
                      </p>}
                
                
              </div>
            </div>
          </div>

          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default mb-2">Highlight Reel</h1>
                <div>
               
                {/* HIGHLIGHT REEL LINKS*/}
                <div className="w-full flex flex-col justify-evenly mb-2 ">
                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                    {edit === true ?  
                    <span className="inline-flex mt-0 -mb-8 text-xl"><BiEdit className="text-2xl" onClick={() => setHighlight1(editHighlight1 === false ? true : false)}/></span> : ''}
                  {editHighlight1 === true ?  
                      <form>
                        <input
                         placeholder={highlightTitle1}
                         
                          className="w-3/4 mb-2  text-center border text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                        <input
                         placeholder={`URL`}
                         
                          className="w-3/4 text-center border mb-4 text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                      </form> 

                      : <a href={highlightLink1} target="_blank">
                      <h1 className="p-2">{highlightTitle1}</h1>
                      </a>}

                    
                  </div>

                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                  {edit === true ?  
                    <span className="inline-flex mt-0 -mb-8 text-xl"><BiEdit className="text-2xl" onClick={() => setHighlight2(editHighlight2 === false ? true : false)}/></span> : ''}
                  {editHighlight2 === true ?  
                      <form>
                        <input
                         placeholder={highlightTitle2}
                         
                          className="w-3/4 mb-2  text-center border text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                        <input
                         placeholder={`URL`}
                         
                          className="w-3/4 mb-4 text-center border text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                      </form> 

                      : <a href={highlightLink2} target="_blank">
                      <h1 className="p-2">{highlightTitle2}</h1>
                      </a>}
                  </div>

                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                  {edit === true ?  
                    <span className="inline-flex mt-0 -mb-8 text-xl"><BiEdit className="text-2xl" onClick={() => setHighlight3(editHighlight3 === false ? true : false)}/></span> : ''}
                  {editHighlight3 === true ?  
                      <form>
                        <input
                         placeholder={highlightTitle3}
                         
                          className="w-3/4 mb-2  text-center border text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                        <input
                         placeholder={`URL`}
                         
                          className="w-3/4 mb-4 text-center border text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                      </form> 

                      : <a href={highlightLink3} target="_blank">
                      <h1 className="p-2">{highlightTitle3}</h1>
                      </a>}
                  </div>

                  <div className="transform transition duration-500 hover:scale-110 text-center mx-20 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4">
                  {edit === true ?  
                    <span className="inline-flex mt-0 -mb-8 text-xl"><BiEdit className="text-2xl" onClick={() => setHighlight4(editHighlight4 === false ? true : false)}/></span> : ''}
                  {editHighlight4 === true ?  
                      <form>
                        <input
                         placeholder={highlightTitle4}
                         
                          className="w-3/4 mb-2  text-center border text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                        <input
                         placeholder={`URL`}
                         
                          className="w-3/4 mb-4 text-center border text-darkBlue-default border-blue-light bg-yellow-default rounded-lg h-8"
                          // onChange={(e) => {
                          // setbio(e.target.value);
                          //  }}
                        />
                      </form> 

                      : <a href={highlightLink4} target="_blank">
                      <h1 className="p-2">{highlightTitle4}</h1>
                      </a>}
                  </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="mt-4 py-4 mb-4 border-t border-darkBlue-default text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-bold text-blue-default">Connect</h1>

                {/* CONNECTION LINKS*/}
                <div className="flex flex-row justify-center">
                <ul className="mb-4 text-lg leading-relaxed text-darkBlue-default mx-6"> 
                {edit === true ?  
                    <form>
                      <input
                       defaultValue={`https://github.com/`}
                        className="border w-full mb-2 border-blue-light bg-yellow-default rounded-lg h-8"
                        // onChange={(e) => {
                        // setbio(e.target.value);
                        //  }}
                      />
                    </form> 

                    : <a href={ghLink} target="_blank">Github</a>}
                  
                </ul>
                <ul className="mb-4 text-lg leading-relaxed text-darkBlue-default mx-6"> 
                {edit === true ?  
                    <form>
                      <input
                       defaultValue={`https://www.linkedin.com/`}
                        className="border w-full mb-2 border-blue-light bg-yellow-default rounded-lg h-8"
                        // onChange={(e) => {
                        // setbio(e.target.value);
                        //  }}
                      />
                    </form> 

                    : <a href={liLink} target="_blank">LinkdIn</a>}
                </ul>
                <ul className="mb-4 text-lg leading-relaxed text-darkBlue-default mx-6"> 
                {edit === true ?  
                    <form>
                      <input
                       defaultValue={`https://twitter.com/`}
                        className="border w-full mb-2 border-blue-light bg-yellow-default rounded-lg h-8"
                        // onChange={(e) => {
                        // setbio(e.target.value);
                        //  }}
                      />
                    </form> 

                    : <a href={twLink} target="_blank">Twitter</a>}
                </ul>
              </div>


                  {/* MESSAGE USER */}
                <div className="flex flex-col justify-items-center">
                  <div className="transform transition duration-500 hover:scale-110 text-center mx-60 text-white-cream  bg-darkBlue-default shadow-2xl rounded-lg border-blue-light border-4 mb-4 ">
                    <a href="#">
                      <div className="flex flex-wrap justify-center text-2xl -mb-2">
                      <BiMessageSquareDots/>
                      </div>
                    <h1 className="p-2">MESSAGE ON CF</h1>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          {/*EDIT/SAVE CHANGES BUTTONS*/}
        <div  className="flex justify-between ">
          <button className="text-white-default  bg-blue-light shadow-2xl rounded-lg border-darkBlue-default border-4 mb-4"  onClick={() =>  setEdit(edit === false ? true : false)}  >
          <div className="flex flex-row ">
            <BiWrench className="-mr-2 my-1 "/>
            <h1 className="mx-4 ">EDIT PROFILE</h1>
          </div>
         </button>
         {edit === true ? <button className="text-white-default  bg-blue-light shadow-2xl rounded-lg border-darkBlue-default border-4 mb-4"  >
          <div className="flex flex-row ">
            <BiWrench className="-mr-2 my-1 "/>
            <h1 className="mx-4 ">SAVE CHANGES</h1>
          </div>
         </button> : ''}
         </div>

        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        
      </div>
    </div>
  </div>
</footer>
  </section>

        </div>
    )
}

export default ProfilePage
