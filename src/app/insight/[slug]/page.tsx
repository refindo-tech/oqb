import Navbar from "@/components/organism/Navbar"
import Footer from "@/components/organism/Footer"
import BlogContent from "@/components/organism/BlogContent"
import WhatsappButton from "@/components/molecules/WhatsappButton"
const BlogPage = () => {
    return(
        <>
            <Navbar />
            <BlogContent />
            <WhatsappButton />
            <Footer />
        </>
    )
}
export default BlogPage