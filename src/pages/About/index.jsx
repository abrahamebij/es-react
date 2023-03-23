import Head from "../../components/Head";
import Hero from "../../components/Hero";
import History from "./History";
import Pastor from "./Pastor";

function About() {
  return (
    <>
      <Head title="About Us" />
      <section>
        <Hero title="About Us" />
        <History />
        <br />
        <Pastor />
      </section>
    </>
  );
}
export default About;
