import React from "react";

const LoginContainer = () => {
return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-default">
        <div className="bg-white-default w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
        <img src="https://i.ibb.co/tKfsZDT/codeforge-logo.png" className="w-20" />
            <label className="font-semibold text-4xl mt-4 mb-4">Welcome!</label>
            <input type="text" className="w-full h-12 rounded-lg px-4 text-lg border-2 border-darkBlue-default focus:ring-blue-default mb-4" placeholder="Email"/>
            <input type="password" className="w-full h-12 rounded-lg px-4 text-lg border-2 border-darkBlue-default focus:ring-blue-600 mb-4" placeholder="Password"/>
            <button className="w-full h-12 rounded-lg bg-darkBlue-default text-white-default uppercase font-semibold hover:bg-white-default hover:text-darkBlue-default text-gray-100 transition mb-4">Login</button>
            <p className="text-right text-blue-default mb-4">Forgot password?</p>
            <label className="text-gray-800 mb-4">or</label>
            <button className="w-full h-12 rounded-lg bg-mint-default text-white-default uppercase font-semibold hover:bg-white-default hover:text-mint-default hover:border-4 hover:border-mint-default text-gray-100 transition mb-4">Sign with Google</button>
            <button className="w-full h-12 rounded-lg bg-blue-default text-white-default uppercase font-semibold hover:bg-white-default hover:text-blue-default hover:border-4 hover:border-blue-default text-gray-100 transition mb-4">Sign with Facebook</button>
            <button className="w-full h-12 rounded-lg bg-yellow-default text-white-default uppercase font-semibold hover:bg-white-default hover:text-yellow-default text-gray-100 transition mb-4">Sign with Github</button>
        </div>
    </div>
    ) 
}

export default LoginContainer