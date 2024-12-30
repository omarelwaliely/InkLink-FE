
import AuthLogin from "../components/AuthLogin";
import AuthSignup from "../components/AuthSignup";
import bookBg from "../assets/books_bg.jpg";
import { useState } from "react";



function Home() {
    const [pageLogin, setPageLogin] = useState(true);

    return (
        <div class="flex w-full h-screen">
            <div class="w-full flex justify-center items-center h-full lg:w-1/2 ">

                {pageLogin ? <AuthLogin setPageLogin={setPageLogin} /> : <AuthSignup setPageLogin={setPageLogin} />}
            </div>

            <div class="hidden lg:flex w-1/2 h-full items-center justify-center">
                <img src={bookBg} alt="book background" className="w-full h-full p-20 object-cover rounded-full" />
            </div>
        </div >
    );
}

export default Home;
