
function loginButton() {
    console.log("login button pressed")
}

function AuthLogin({ setPageLogin }) {
    return (
        <div className="bg-[#ffffff] px-10 py-20 rounded-xl">
            <h1 className="text-5xl">Welcome to a Universe of Stories</h1>
            <p className="flex justify-center text-gray-500 text-lg mt-5 mb-10">Please enter your details</p>
            <div>
                <div>
                    <label className="font-medium"> Email: </label>
                    <input className="mt-5 w-full p-2 border-2  rounded-xl" placeholder="Enter your Email" />
                </div>
                <div className="mt-5">
                    <label className="font-medium"> Password: </label>
                    <input className="mt-5 w-full p-2 border-2  rounded-xl" placeholder="Enter your password" />
                </div>
                <button className="mt-7 mb-20 bg-black w-full text-white p-2 rounded-full" onClick={loginButton} >Log in </button>
                <div className="flex items-center justify-center flex-row">
                    <p className="mr-1">Don't have an account? </p>
                    <button className="text-blue-700" onClick={() => setPageLogin(0)}> Sign Up</button>
                </div>
            </div>
        </div >
    );
}

export default AuthLogin;
