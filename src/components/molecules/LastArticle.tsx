import Link from 'next/link'
import articles from '../../../public/data.json'
const LastArticle = () => {
    const selectedArticles = articles.slice(0,3)
    return(
        <div className="rounded-xl bg-[#00224D] w-full flex flex-col">
            <h3 className="font-bold font-roboto text-center text-3xl bg-white p-4 w-full rounded-t-xl text-navy">Last Article</h3>
            <div className="w-full p-5 gap-3 flex-grow flex flex-col justify-between font-poppins">
                {selectedArticles.map((item, index)=>(
                <Link prefetch={true} href={item.slug} className="h-1/3 bg-greenWhite/30 rounded-lg flex flex-col p-3 gap-1 hover:bg-greenWhite/50" key={index}>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-white/70 line-clamp-2">{item.description}</p>
                </Link>
                ))}
            </div>
        </div>
    )
}
export default LastArticle