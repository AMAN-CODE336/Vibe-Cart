import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import Findus from "./Findus";
import Products from "./products";
import Productsdt from "./Productsdt";
import Login from "./Login";
function NavbarComponent() {
    return (
        <>

            <div className="flex flex-col  ">
                <Router>
                    <nav className="flex justify-around items-center ">
                        <ul className="flex gap-8 justify-start items-start text-2xl mt-4 ">
                            <Link to={"/products"}><li> products</li></Link>
                            <Link to={"/"}> <li> vibecart </li></Link>
                            <Link to={"/Findus"}><li> Find us </li></Link>
                        </ul>
                        <div className="">
                            <img src="/weblogo.png" alt="" className="rotate-90 h-24 w-24 font-bold" />
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2 mt-4 ">
                                <span className="text-xl "><CgProfile /></span>
                              <Link to={"/login"}> <button className="text-2xl">Login</button></Link> 
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <span className="text-2xl"><CiHeart /></span>

                                <span className="text-2xl"><GiShoppingCart /></span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="absolute pt-4 pl-3">
                                <FaMagnifyingGlass />
                            </div>
                            <input type="text" placeholder="Search" className="p-2 w-52 border-2 border-black border-r-0 border-t-0 border-l-0  placeholder:text-black ps-16" />
                        </div></nav>

                    <Routes>
                        <Route path="/products" element={<Products />} />
                        <Route path="/" element={<Hero />} />
                        <Route path="/Findus" element={<Findus />} />
                        <Route path="/productsdt/:id" element={<Productsdt />} ></Route>
                        <Route path="/login" element={<Login />} ></Route>
                    </Routes>
                </Router>

            </div>

        </>
    )
}
export default NavbarComponent