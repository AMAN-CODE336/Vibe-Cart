import { useEffect, useState } from "react";
// import { productsdata } from "../productsdata";
// import {data} from "./moviedata2"
import { Star } from 'lucide-react'
import { Link } from "react-router-dom";


export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(true)

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(
            json => {
                setProducts(json)
                setloading(false)
            }
        )
    if (loading) {
        return (
            <div className="flex  justify-center items-center h-[80vh]   ">
                <span class="loader"></span>
            </div>
        )
    }

    return (
        <>
            <section className="bg-[url('./products-img-2.png')] bg-no-repeat bg-cover h-[36rem]">
                <div className="flex justify-between   gap-12 mt-[22rem] ">
                    <div className="flex ps-[27rem] ">
                        <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span class="relative text-black group-hover:text-white">Womens</span>
                        </a>
                    </div>

                    <div className="flex pe-[9rem]  ">
                        <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span class="relative text-black group-hover:text-white">Mens</span>
                        </a>
                    </div>
                </div>
            </section>
            <div>
                <h2 className=" flex items-center justify-center mt-10 text-5xl font-bold">
                    Shop All
                </h2>
            </div>
            <div className="flex items-center justify-center mt-10 gap-4">
                <div>
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-black hover:text-white rounded-full border-2 border-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-black group-hover:opacity-80"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">All</span>
                    </a>
                </div>

                <div>
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold hover:text-white text-sky-500 rounded-full border-2 border-sky-500 group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-sky-500 group-hover:opacity-80"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Mens</span>
                    </a>
                </div>


                <div>
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-green-500 hover:text-white rounded-full border-2 border-green-500 group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-green-600 group-hover:opacity-80"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Womens</span>
                    </a>
                </div>
                <div>
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-rose-600 hover:text-white rounded-full border-2 border-rose-600 group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-rose-600 group-hover:opacity-80"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Kids</span>
                    </a>
                </div>
                <div>
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-lime-600 hover:text-white rounded-full border-2 border-lime-600 group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-lime-600 group-hover:opacity-80"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Home</span>
                    </a>
                </div>
                <div>
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-red-600 hover:text-white rounded-full border-2 border-red-600 group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-red-600 group-hover:opacity-80"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Beauty</span>
                    </a>
                </div>
            </div>

            <div>
                <ul className="grid grid-cols-4 px-10 gap-10  mt-10">
                    {

                        products.map((item, index) => (
                            <Link key={index} to={`/productsdt/${item.id}`}>
                                < div className="max-w-sm rounded-md h-auto overflow-hidden shadow-lg bg-white" >
                                    <div className="relative w-full">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-80 w-full"
                                        />
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 line-clamp-1">{item.title}</div>
                                        <p className="text-gray-700 text-base line-clamp-2">{item.description}</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            ${item.price.toFixed(2)}
                                        </span>
                                        <div className="flex items-center mt-2">
                                            <Star className="h-5 w-5 text-yellow-500" />
                                            <span className="ml-1 text-gray-600"></span>
                                            <span className="ml-2 text-gray-500">(4.5 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))


                    }
                </ul >
            </div >


        </>
    );
}
function Apps() {
    const [products, setProducts] = useState([]);


}