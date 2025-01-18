import { IoAccessibilitySharp } from "react-icons/io5";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <section className="bg-[url('')] ">
                <div className="flex justify-around">
                    <div className="flex flex-col mt-20 gap-8 ps-20">
                        <h2 className="text-4xl font-bold">
                            "Shop Smart, Live Better"
                        </h2>
                        <p className="text-2xl font-semibold ">
                            Discover top-quality products at amazing prices. <br />
                            Shop now for exclusive deals, fast delivery, <br /> and a seamless shopping experience.
                        </p>
                    </div>
                    <div className="flex  items-end">
                        <img src="web-1.png" alt="" className="object-cover h-[40rem]  " />
                    </div>
                </div>
                <div className="flex ps-24 pe-24 mt-10">
                    <p className="text-2xl">
                        Vibe Mart is your one-stop online shop for everything you need to elevate your lifestyle. From <br /> fashion-forward apparel and accessories to
                        top-quality electronics and home essentials, we offer a wide range of products at unbeatable prices. Enjoy a seamless shopping experience
                        with fast delivery, easy returns, and secure payment options.
                    </p>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <h2 className="text-5xl font-bold">Community impact</h2>
                </div>
                <div className="flex justify-center items-center gap-20 mt-20 p-4 border-2  border-solid bg-emerald-400 ">
                    <div className="flex flex-col gap-5" >
                        <h2 className="text-5xl font-semibold">354+ </h2>
                        <p className="text-2xl">employee hours <br />
                            donated in 2023 to <br />
                            10+ organizations
                        </p>
                    </div>
                    <div className="flex flex-col gap-5" >
                        <h2 className="text-5xl font-semibold">2.6M+</h2>
                        <p className="text-2xl">Products shipped <br />
                            to Red Cross <br /> locations
                            across <br /> the US</p>
                    </div>
                </div>

                <div>
                    <h2 className="flex  text-5xl font-bold justify-center mt-20">what We Believe </h2>
                </div>
                <div className="flex justify-around items-center mt-20 ps-20 pe-16 gap-20">
                    <div className="flex flex-col gap-4">
                        <span className="text-[8rem] text-center">
                            <IoAccessibilitySharp />
                        </span>
                        <h2 className="text-4xl font-bold">
                            Create Access to Quality Products
                        </h2>
                        <p className="text-xl">
                            e believe everyone should have access to the products that elevate their everyday lives. Through VibeMart,
                            we strive to make shopping more inclusive by offering a diverse selection of high-quality goods to individuals across all communities.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[8rem]">
                            <BsEmojiSunglasses />
                        </span>
                        <h2 className="text-4xl font-bold" >
                            Enhance Shopping Experiences
                        </h2>
                        <p className="text-xl">
                            At VibeMart, we believe shopping should be enjoyable, simple, and personal. We focus on providing a seamless,
                            intuitive online experience where every customer feels valued and every product fits their unique needs.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[8rem]">
                            <FaPeopleCarry />
                        </span>
                        <h2 className="text-4xl font-bold">
                        Support Community Impact
                        </h2>
                        <p className="text-xl">
                        We believe in the power of community and the impact we can make together. Through VibeMart, 
                        we actively support local artisans, small businesses, and global causes.
                         
                        </p>
                    </div>
                </div>

            </section>






        </>


    )
}