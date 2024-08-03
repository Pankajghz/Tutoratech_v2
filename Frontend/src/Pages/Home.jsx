import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Nav from "../components/Navbar/Nav";
import NewsletterForm from "../components/NewsletterForm/NewsletterForm";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <NewsletterForm />
      <Footer />
    </>
  );
};

export default Home;
