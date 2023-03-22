import { motion } from "framer-motion";
import Hero from "./Hero";
import Head from "../../components/Head";
import { TextLinkUnderline } from "../../components/Link";
import Schedule from "./Schedule";

function Home() {
  return (
    <>
      <Head
        title="Home"
        desc="Worship with us at RCCG Emmanuel Sanctuary located at 37, Agbe Road, Abule-Egba, Lagos. This is a zonal headquarters under lagos province 77"
        img="https://raw.githubusercontent.com/abrahamebij/images/main/previews/home.webp"
      />
      <motion.div
        initial={{ width: 0, overflowX: "hidden", opacity: 0 }}
        animate={{ width: "100%", opacity: "1" }}
        exit={{ width: 0, opacity: 0 }}
      >
        {/* Hero */}
        <Hero title='RCCG EMMANUEL SANCTUARY' desc="Experience God's unending grace, favour and mercy." btn={true} />

        {/* About Us */}
        <section className="mt-20 mb-10">
          <h2 className="font-bold dark:text-white text-3xl text-center mb-7 home-underline">
            About Us
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-5 gap-y-10 dark:text-white px-10">
            <div>
              <img src="/img/wallpaper.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p>
                We are a church of God's people who are passionate about
                learning new things and developing ourselves in God's light.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo ab nesciunt atque id quae error delectus in voluptatem dicta.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo ab nesciunt atque id quae error delectus in voluptatem dicta.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo ab nesciunt atque id quae error delectus in voluptatem dicta.</p>
              <p className="pt-2">
                <TextLinkUnderline value="Read More..." href="/about" />
              </p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <Schedule />
        
      </motion.div>
    </>
  );
}
export default Home;
