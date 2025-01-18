import { FcFaq } from "react-icons/fc";
import { TbTruckReturn } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiGnuprivacyguard } from "react-icons/si";
import { LuBellRing } from "react-icons/lu";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";



export default function Findus() {
    return (
        <>
            
                <div className="flex flex-col gap-3  bg-[url('./img-bg-findus.jpg')] bg-no-repeat bg-cover h-[44rem]">
                    <h2 className=" flex items-center justify-center mt-64 text-4xl font-semibold">
                        Contact Vibe Cart
                    </h2>
                    <p className=" flex items-center justify-center  text-2xl">
                        whether you have a question, a suggestion, or just want to chat, our friendly team is here to help.
                    </p>
                </div>
            
            <div className="flex justify-around items-center mt-10">
                <div className="flex flex-col justify-start items-start    ">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[4rem]"><FcFaq /></span>
                        <h2 className="font-semibold ">Product FAQ's </h2>
                        <button className="p-2 text-white  rounded-md bg-slate-700">Find answer now</button>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start   ">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[4rem]"><TbTruckReturn /> </span>
                        <h2 className="font-semibold ">Shipping and return </h2>
                        <button className="p-2 text-white  rounded-md bg-slate-700">Learn More</button>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start   ">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[4rem]"><MdVerifiedUser /></span>
                        <h2 className="font-semibold ">Warranty </h2>
                        <button className="p-2 text-white  rounded-md bg-slate-700">Learn More</button>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start   ">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[4rem]"><LiaCertificateSolid /></span>
                        <h2 className="font-semibold ">Product Registration</h2>
                        <button className="p-2 text-white  rounded-md bg-slate-700">Register Your vibe</button>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start   ">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[4rem]"><SiGnuprivacyguard /></span>
                        <h2 className="font-semibold ">Privacy Inquiry</h2>
                        <button className="p-2 text-white  rounded-md bg-slate-700">Learn More</button>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start   ">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[4rem]"><LuBellRing /></span>
                        <h2 className="font-semibold ">Corporate Quote</h2>
                        <button className="p-2 text-white  rounded-md bg-slate-700">Get a Quote</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-around  mt-28">

                <div className="flex flex-col justify-start items-center gap-3">
                    <h2 className=" flex    text-4xl font-bold">Service Team</h2>
                    <p className=" font-semibold ">our team for general inquiries , product <br /> questions, support, and customer service.</p>
                    <u><p className=" font-semibold ">[Warranty Claim & Return Policy]</p></u>
                    <p className=" font-semibold "> monday - friday</p>
                    <p className=" font-semibold ">9am - 6pm</p>
                    <p className=" font-semibold ">sat - sun</p>
                    <p className=" font-semibold ">10am - 4pm</p>
                    <p className=" font-semibold ">call us on :)</p>
                    <u> <p className=" font-semibold ">123-456-7890</p></u>
                </div>

                <div className="flex flex-col justify-start items-center gap-3">
                    <h2 className=" flex    text-4xl font-bold">OFFICE</h2>
                    <p className=" font-semibold ">112, abc street, <br /> xyz city</p>
                </div>

                <div className="flex flex-col justify-start items-center gap-3">
                    <h2 className=" flex   text-4xl font-bold">Sales Team</h2>
                    <p className=" font-semibold ">Bussiness enquiries</p>
                    <u><p className=" font-semibold ">[Request a Quote]</p></u>
                    <p className=" font-semibold "> monday - friday</p>
                    <p className=" font-semibold ">7am - 9pm</p>
                    <u><p className=" font-semibold ">123-456-7890</p></u>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center mb-16 gap-4">
                <h2 className="text-4xl font-bold text-center mt-20">
                    CONNECT WITH <br /> US
                </h2>
                <div className="flex gap-3">
                    <span className="text-4xl">
                        <FaFacebookF />
                    </span>
                    <span className="text-4xl">
                        <IoLogoTwitter />
                    </span>
                </div>
            </div>

        </>
    );
}