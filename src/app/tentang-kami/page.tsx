import Navbar from "@/components/organism/Navbar"
import HeroComponent from "@/components/organism/Hero"
import CategoryProject from "@/components/organism/CategoryProject"
import ContactForm from "@/components/organism/ContactForm"
import SectorProject from "@/components/organism/SectorProject"
import  Footer from "@/components/organism/Footer"
import ScrollToTop from "@/components/molecules/ScrollToTop"
const AboutUs = () => {
    return(
        <>
            <Navbar />
            <HeroComponent />
            <SectorProject/>
            <CategoryProject />
            <ContactForm />
            <ScrollToTop />
            <Footer />
        </>
    )
}
export default AboutUs