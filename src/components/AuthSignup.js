
function signupButton() {
    console.log("signup button pressed")
}

function AuthSignup({ setPageLogin }) {
    return (
        <div className="bg-[#ffffff] px-10 py-20 rounded-xl">
            <h1 className="text-5xl">Welcome, Story Seeker</h1>
            <p className="flex justify-center text-gray-500 text-lg mt-5 mb-10">Please enter your details</p>
            <div>
                <div>
                    <label className="font-medium"> Name: </label>
                    <input className="mt-5 w-full p-2 border-2  rounded-xl" placeholder="Enter your name" />
                </div>
                <div className="mt-5">
                    <label className="font-medium"> Email: </label>
                    <input className="mt-5 w-full p-2 border-2  rounded-xl" placeholder="Enter your email" />
                </div>
                <div className="mt-5">
                    <label className="font-medium">  Password: </label>
                    <input type="password" className="mt-5 w-full p-2 border-2  rounded-xl" placeholder="Enter your password" />
                </div>
                <div className="mt-5">
                    <label className="font-medium">Confirm Password: </label>
                    <input type="password" className="mt-5 w-full p-2 border-2  rounded-xl" placeholder="Enter your password again" />
                </div>
                <button className="mt-7 mb-20 bg-black w-full text-white p-2 rounded-full" onClick={signupButton} >Sign Up </button>
                <div className="flex items-center justify-center flex-row">
                    <p className="mr-1">Already have an account? </p>
                    <button className="text-blue-700" onClick={() => setPageLogin(1)}> Log in</button>
                </div>
            </div>
        </div >
    );
}

export default AuthSignup;
