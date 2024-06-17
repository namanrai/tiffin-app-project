import About from "../components/about";
import HomeLanding from "../components/homeLanding";
import Services from "../components/services";
import CallToAction from "../components/callToAction";


function Home() {
  return (
    <div className="Home">
      <HomeLanding/>
      <About/>
      <Services/>
      <CallToAction/>
    </div>
  );
}

export default Home;