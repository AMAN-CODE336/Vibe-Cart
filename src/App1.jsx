import NavbarComponent from "./Components/Navbar"
// import Footer from "./Components/Footer"
// import { data } from "./moviedata2"
import { useState } from "react"
// import hero from "./Components/hero"
function App() {
    // const name = "aman"
    // const name2 = "siddharth"
return (
    <>
   

    {/* // ( form data )


    const [count, setcount] = useState(0)
    const [formdata , setformdata] = useState({
        uaername : "",
        password : ""
    })
    const[submitdata , setsubmitdata] = useState(null)
        function handlesubmit(e){
    e.preventDefault()
    setsubmitdata(formdata)


}
// console .log(submitdata)


 */}


        


            {/* <h1>the count is {count}</h1>
            <button onClick={() => { setcount(count + 1) }}  className="bg-black text-white p-2">
                click me
            </button> */}

{/* movies section  */ }

{/* <ul className="grid grid-cols-3 px-10 gap-10">
                {

                    data.map((item, index) => (

                        <li key={index}>
                            <img src={item.image_url} alt="" className="relative h-80 w-full p-8" />
                            <h2 className="   bottom-0 left-0  text-black p-4 text-[18px] font-semibold ">{item.description}</h2>
                        </li>
                    ))


                }

            </ul> */}


{/* ( form data ) */ }

 {/* <form className=" flex flex-col  mt-40 gap-10  " onSubmit={handlesubmit}>
<div className="flex justify-center items-center">
    <h1 className="text-5xl font-semibold">Login</h1>
</div>

<div className="flex justify-center items-center">
    <input type="text" placeholder="Username" className="p-2 w-80 border-2 border black"
    onChange={(e) => {setformdata({...formdata , username : e.target.value})}} />
</div>
<div className="flex justify-center items-center ">
    <input type="password" placeholder="Password"
 className="p-2 w-80 border-2 border black" onChange={(e) => {setformdata({...formdata , password : e.target.value})}} />
</div>
<div className="flex px-[33rem]">
    <input type="checkbox" className="border-2 border black p-2" />
    <p>Remember me</p>
</div>
<div className="flex justify-center items-center">
    <button type="submit" className="  p-2 w-80 border-2 border black"> submit </button>
    
</div>

        </form >

{submitdata && 
    <div className="flex flex-col gap-10 mt-10">
        <h1>username : {submitdata.username}</h1>
        <h1>password : {submitdata.password}</h1>
    </div>
    }
  */}

 </>
)
}


        







export default App