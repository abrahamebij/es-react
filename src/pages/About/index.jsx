import Head from "../../components/Head";
import Hero from "../../components/Hero";
import History from "./History";
import Pastor from "./Pastor";
import Ministers from "./Ministers";
import Social from './Social'

function About() {
  return (
    <>
      <Head title="About Us" />
      <section className="pb-5">
        <Hero title="About Us" />
        <History />
        <br />
        <Pastor />
        <br />
        <Ministers />
        <br />
        <Social />
      </section>
    </>
  );
}
export default About;
