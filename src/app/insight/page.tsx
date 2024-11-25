import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import HeroComponent from "@/components/organism/Hero";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import BlogContainer from "@/components/organism/BlogContainer";
const BlogPage = () => {
  return (
    <>
      <Navbar />
      {/* <HeroComponent /> */}
      <HeroComponent
        title={
            <>
                Stay Informed <br /> Stay Ahead
            </>
        }
        description="Discover the latest trends, tutorials, case studies, and strategies to drive your business and technology forward"
        path="/images/assets/hero/hero_news.jpg"
      />
      <BlogContainer />
      <WhatsappButton />
      <Footer />
    </>
  );
};
export default BlogPage;
