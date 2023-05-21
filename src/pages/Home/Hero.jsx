// import { Btn } from "../../components/Link";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa";

function Hero(props) {
  function toSchedule() {
    window.scrollTo(0, 1150)
  }
  return (
    <section
      className={`relative bg-black/60 bg-cross lg:bg-black/40 bg-cover bg-center text-gray-50 bg-blend-darken`}
      style={{ backgroundPositionY: "25%" }}
    >
      <div className="px-4 py-24 md:py-[20%] text-white dark:text-black lg:bg-gradient-to-r from-black/90 via-black/90">
        <div className="lg:w-1/2 text-center flex flex-col gap-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            {props.title}
          </h1>
          <p>{props.desc}</p>
          
          {props.btn && <Button
            value="Join Us"
            href="/#schedule"
            className="!bg-primary !text-gray-100 rounded-sm mx-auto mt-3"
            icon={<FaArrowRight className="animate-right" />}
           onClick={toSchedule}
          />}
        </div>
      </div>
    </section>
  );
}

export default Hero;
