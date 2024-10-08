import About from "../components/about";
import HomeLanding from "../components/homeLanding";
import Services from "../components/services";
import CallToAction from "../components/callToAction";
import Footer from "../components/footer";


function Home() {
  return (
    <div className="Home">
      <HomeLanding/>
      <About/>
      <Services/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default Home;