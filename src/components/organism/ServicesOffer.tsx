import Link from "next/link"
const ServiceOffer = () => {
    return(
        <div className="bg-gray-100 min-h-[80vh] flex flex-col items-center justify-center gap-5 text-center py-20 text-gray-600">
            <h2 className="text-4xl font-semibold font-roboto">What we do?</h2>
            <p className="max-w-[70%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo excepturi quisquam repudiandae necessitatibus earum perspiciatis, dolor magni doloribus. Ab harum culpa cupiditate expedita sit inventore beatae aliquid adipisci omnis tenetur!</p>
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] gap-4">
                <div className="rounded-lg bg-white shadow-xl h-40 ">
                    TEXT
                </div>
                <div className="rounded-lg bg-white shadow-xl h-40 ">
                    TEXT
                </div>
                <div className="rounded-lg bg-white shadow-xl h-40 ">
                    TEXT
                </div>
                <div className="rounded-lg bg-white shadow-xl h-40 ">
                    TEXT
                </div>
            </div>
            <Link href={'/product'} className="p-3 text-white font-semibold bg-biru hover:bg-blue-800 rounded-lg">See more</Link>
        </div>
    )
}
export default ServiceOffer