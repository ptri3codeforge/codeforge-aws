import React, {useState, useContext} from 'react'
import { BiHome, BiChalkboard, BiNews, BiMessageRounded, BiUserCircle, BiNotification, BiLogOut } from "react-icons/bi";
import { viewContext } from '../Containers/AppContainer';


const SideBarComponents = () => {

  const { setView } = useContext<any>(viewContext)

    return (
        <div className="bg-blue-light rounded-r-3xl h-full">
<div className="min-h-screen flex flex-row bg-gray-100">
  <div className="flex flex-col w-56  rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center h-20 shadow-md">
      <img src="https://i.ibb.co/tKfsZDT/codeforge-logo.png" className="w-20" />
    </div>
    <ul className="flex flex-col py-4">
      <li>
        <a href="#" onClick={() => setView('dashboard')}className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-darkBlue-default hover:text-yellow-default">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <BiHome />
              </span>
          <span className="text-sm font-medium">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#"  onClick={() => setView('bulletin')} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-darkBlue-default hover:text-yellow-default">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <BiChalkboard />
          </span>
          <span className="text-sm font-medium">Bulletin Board</span>
        </a>
      </li>
      <li>
        <a href="#" onClick={() => setView('jobs')} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-darkBlue-default hover:text-yellow-default">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <BiNews />
            </span>
          <span className="text-sm font-medium">Job Board</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-darkBlue-default hover:text-yellow-default">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <BiMessageRounded/>
              </span>
          <span className="text-sm font-medium">Messages</span>
        </a>
      </li>

      <li>
        <a href="#"   onClick={() => setView('profile')} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-darkBlue-default hover:text-yellow-default">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <BiUserCircle/>
              </span>
          <span className="text-sm font-medium">Profile</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-darkBlue-default hover:text-yellow-default">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <BiNotification/>
              </span>
          <span className="text-sm font-medium">Notifications</span>
          <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-darkBlue-default hover:text-yellow-default">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <BiLogOut/></span>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</div>
    )
}

export default SideBarComponents
