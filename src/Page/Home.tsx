import Catalog from "../components/catalog/Catalog";
import FAQ from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Catalog/>
      <FAQ/>
      <Footer/>
    </>
  )
};

export default Home;
