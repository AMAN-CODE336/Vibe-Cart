import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Hero from "./Components/Hero";
// import Products from "./Components/Products";
import Findus from "./Components/Findus";
import Login from "./Components/Login";
import Footer2 from "./Components/Footer2";


export default function App() {
    return (
        
        <>
<NavbarComponent/>
{/* <Hero/> */}
{/* <Products/> */}
{/* <Findus/> */}
{/* <Login/> */}

<Footer2/>

















            {/* <Router>
                <div className="">
                     to="/">home<>
                     to="/about">about<>
                     to="/service">service<>
                     to="/contact">contact<>
                </div>


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Conatact />} />
                </Routes >
            </Router> */}
        </>);
}







// function Home() {
//     return(
    
//         <>
//             <h1>Home</h1>
//         </>
//     );
// }


// function About() {
//      return (
//         <>
        
//      <h1>about</h1>

//      </>
    
//     ); }


// function Service() { 
//     return (
//         <>
//     <h1 className="text-black">service</h1>

//     </>
    
// ); }
// function Conatact() {
//      return (
//      <>
//      <h1>contact</h1>

//      </>
     
//     ); }