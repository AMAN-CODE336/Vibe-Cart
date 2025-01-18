import { useParams } from "react-router-dom"
import { useState } from "react"
export default function Productsdt() {
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(true)

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(
            json => {
                setData(json[id])
                setloading(false)
            }
        )

    const { id } = useParams()
    if (loading){
       return (
        <div className="flex  justify-center items-center h-[80vh]   ">
            <span class="loader"></span>
        </div>
    ) 
    } 
    else {

        return (

            <>
                <div className="flex justify-between items-center gap-36" >
                    <div className="  ">
                    <img src={data.image} className="object-cover flex  " alt="" />
                    </div>
                    <div className="p-6 flex flex-col gap-10">
                    <div className="text-3xl font-semibold">{data.title}</div>
                    <div className="text-xl  flex flex-col gap-12">{data.description}</div>
                    </div>
                </div>

            </>
        )
    }

}
