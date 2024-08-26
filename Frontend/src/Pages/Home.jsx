import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Support from "../components/Support";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Support />
      <section id="faqs">
        <FAQs />
      </section>
      <Footer />
    </>
  );
};

export default Home;
